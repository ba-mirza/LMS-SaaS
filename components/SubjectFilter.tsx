'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {subjects} from "@/constants";
import {useEffect, useState} from "react";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";
import {useRouter, useSearchParams } from "next/navigation";

export const SubjectFilter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const query = searchParams.get('subject') || ''

    const [subject, setSubject] = useState<string>(query);

    useEffect(() => {
        let newUrl = ''
        if(subject === 'all') {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['subject'],
            })

            router.push(newUrl, {scroll: false})
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'subject',
                value: subject,
            })

            router.push(newUrl, {scroll: false})
        }
    }, [subject]);

    return (
        <Select
            onValueChange={setSubject}
            value={subject}
        >
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Select the subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject: string) => (
                    <SelectItem className="capitalize" key={subject} value={subject}>
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SubjectFilter