import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neura the Brainy Explorer"
          subject="Neuroscience"
          duration={5}
          color="#4A90E2"
        />
        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neura the Brainy Explorer"
          subject="Neuroscience"
          duration={5}
          color="#4A90E2"
        />
        <CompanionCard
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neura the Brainy Explorer"
          subject="Neuroscience"
          duration={5}
          color="#4A90E2"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently Launched Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
