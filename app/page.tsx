import React from 'react'
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import CompanionCard from "@/components/CompanionCard";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="Science"
                duration={45}
                color="#eeeeee"
            />
        </section>

        <section className="home-section">
            <CompanionsList />
            <Cta />
        </section>
    </main>
  )
}

export default Page