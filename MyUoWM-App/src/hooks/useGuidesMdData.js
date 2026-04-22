import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import firstYearGuidesMdData from "../assets/data/FirstYearInfo";

export const useGuidesMdData = () => {
    const { i18n } = useTranslation();
    const [guideMd, setGuideMd] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const firstYearGuidesTranslated = firstYearGuidesMdData[i18n.language];

    // .md files are bundled as URL strings by Vite (assetsInclude), so we fetch their content
    const fetchGuideByPath = useCallback((guidePath) => {
        const controller = new AbortController();
        setIsLoading(true);
        setError(null);
        fetch(guidePath, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to load guide: ${res.status}`);
                return res.text();
            })
            .then((md) => {
                setGuideMd(md);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        return () => controller.abort();
    }, []);

    return { guideMd, firstYearGuidesTranslated, fetchGuideByPath, setGuideMd, isLoading, error }
};