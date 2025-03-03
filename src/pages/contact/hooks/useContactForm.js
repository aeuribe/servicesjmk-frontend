import { useState } from "react";
import { sendForm } from "../../../services/mailsenderService.js"

export function useContactForm() {
    const [submitted, setSubmitted] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        setLoading(true);
        setError(null);

        sendForm(data)
            .then((response) => setSubmitted(response))
            .catch((error) => setError(error.errorMessage))
            .finally(() => setLoading(false));
    };

    return { submitted, loading, error, onSubmit };
}
