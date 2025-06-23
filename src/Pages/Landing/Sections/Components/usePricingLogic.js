import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// This data could also be fetched from an API
const allSubjectsKeys = [
    'history_kz', 'math', 'physics', 'geography', 
    'world_history', 'biology', 'chemistry', 'informatics', 'english'
];

const mandatorySubjectKey = 'history_kz';
const profilePairsKeys = [
    ['math', 'physics'],
    ['math', 'informatics'],
    ['biology', 'chemistry'],
    ['geography', 'world_history'],
    ['english', 'world_history'],
];

export const usePricingLogic = () => {
    const { t } = useTranslation();
    const examOptions = ['ent', 'bil', 'nis'];
    
    const [selectedExam, setSelectedExam] = useState(examOptions[0]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectClick = (subjectKey) => {
        if (selectedSubjects.includes(subjectKey)) {
            setSelectedSubjects(prev => prev.filter(s => s !== subjectKey));
        } else if (selectedSubjects.length < 3) {
            setSelectedSubjects(prev => [...prev, subjectKey]);
        }
    };

    const getDiscount = () => {
        if (selectedSubjects.length === 1) return '-20%';
        if (selectedSubjects.length === 2) return '-35%';
        return '';
    };

    const subjectsWithStatus = allSubjectsKeys.map(subjectKey => {
        const isSelected = selectedSubjects.includes(subjectKey);

        let isAvailable = true;
        if (selectedSubjects.length === 1) {
            const s1 = selectedSubjects[0];
            if (s1 !== mandatorySubjectKey && subjectKey !== mandatorySubjectKey) {
                isAvailable = profilePairsKeys.some(p => p.includes(s1) && p.includes(subjectKey));
            }
        } else if (selectedSubjects.length === 2) {
            const profileSelection = selectedSubjects.filter(s => s !== mandatorySubjectKey);
            if (profileSelection.length === 1) { // mandatory + profile
                const s1 = profileSelection[0];
                if (subjectKey !== mandatorySubjectKey) {
                    isAvailable = profilePairsKeys.some(p => p.includes(s1) && p.includes(subjectKey));
                }
            } else { // two profile subjects
                isAvailable = subjectKey === mandatorySubjectKey;
            }
        }
        
        const isDisabled = !isSelected && (selectedSubjects.length >= 3 || !isAvailable);

        return { name: subjectKey, isSelected, isDisabled, isAvailable };
    });

    subjectsWithStatus.sort((a, b) => {
        if (a.isSelected !== b.isSelected) return a.isSelected ? -1 : 1;
        if (a.isDisabled !== b.isDisabled) return a.isDisabled ? 1 : -1;
        return 0;
    });

    return {
        t,
        examOptions,
        selectedExam,
        setSelectedExam,
        allSubjectsKeys,
        selectedSubjects,
        handleSubjectClick,
        subjectsWithStatus,
        getDiscount
    };
}; 