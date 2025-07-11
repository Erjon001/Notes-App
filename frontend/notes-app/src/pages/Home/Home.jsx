import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting"
            date="21st April 2025"
            content="Meetinganwdawndsa"
            tags="#Meeting"
            isPinned={() => {}}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
