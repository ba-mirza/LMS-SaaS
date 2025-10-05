import React from 'react'

import {getAllCompanions} from "@/lib/actions/companion.action";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionLibrary = async ({searchParams}: SearchParams) => {
    const filters = await searchParams
    const topic = filters.topic ? filters.topic : ''
    const subject = filters.subject ? filters.subject : ''

    const companions = await getAllCompanions({topic, subject})

    return (
      <main>
        <section className="flex justify-between gap-4 max-sm:flex-col">
          <h1>Companion Library</h1>
          <div className="flex gap-4">
            <SearchInput />
            <SubjectFilter />
          </div>
        </section>
        <section className="companions-grid">
          {
            companions?.map((companion) => (
                <CompanionCard
                    {...companion}
                    key={companion.id}
                    color={getSubjectColor(companion.subject)}
                />
            ))
          }
        </section>
      </main>
  )
}

export default CompanionLibrary