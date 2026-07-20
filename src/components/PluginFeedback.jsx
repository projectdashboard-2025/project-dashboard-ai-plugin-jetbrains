import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://emlyneavoqtghwjztnzg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xEufk9l4tpDWHbGdOA6lEQ_Kqrxp_w7';

let supabaseClient = null;
function getSupabaseClient() {
    if (typeof window === 'undefined') return null;
    if (!supabaseClient) {
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return supabaseClient;
}


const FEATURE_OPTIONS = [
    { value: 'export-csv', label: 'Export checklist to CSV for non-IDE stakeholders' },
    { value: 'lazy-comments', label: 'Faster issue comment loading on large repos' },
    { value: 'more-providers', label: 'Support for more AI providers' },
    { value: 'team-sync', label: 'Multi-user / team checklist sync' },
];

export default function PluginFeedback() {
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const [status, setStatus] = useState(null); // null | 'success' | 'error'

    const onSubmit = async (data) => {
        // Honeypot — bots tend to fill every field, real users never see this one.
        if (data.website) {
            return;
        }

        const supabase = getSupabaseClient();
        if (!supabase) {

            return;
        }

        setStatus(null);

        const { error } = await supabase.from('feedback').insert([
            {
                reason: 'feature_request',
                features: data.features || [],
                comment: data.comment || null,
                page_url: typeof window !== 'undefined' ? window.location.href : null,
            },
        ]);

        if (error) {
            console.error('Feedback submit error:', error);
            setStatus('error');
        } else {
            setStatus('success');
            reset();
        }
    };

    if (status === 'success') {
        return (
            <div className="feedback-success">
                <p>Thanks — that's genuinely useful.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
            <fieldset>
                <legend>What's missing for you?</legend>
                {FEATURE_OPTIONS.map((opt) => (
                    <label key={opt.value} className="feedback-checkbox-row">
                        <input type="checkbox" value={opt.value} {...register('features')} />
                        {opt.label}
                    </label>
                ))}
            </fieldset>

            <label htmlFor="comment" className="feedback-comment-label">
                Anything else? (optional)
            </label>
            <textarea
                id="comment"
                rows={4}
                placeholder="Describe what you'd like to see..."
                {...register('comment')}
            />


            <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px' }}
                {...register('website')}
            />

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send feedback'}
            </button>

            {status === 'error' && (
                <p className="feedback-error">Something went wrong — try again in a moment.</p>
            )}
        </form>
    );
}
