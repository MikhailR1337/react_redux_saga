import React from 'react';

export const Loader = () => {
    return (
        <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Загрузка...
        </button>
    )
}