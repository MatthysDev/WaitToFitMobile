import { ScrollView } from "react-native";
import React from "react";
import CoachCard from "./CoachCard";

type Props = {};

const CoachList = (props: Props) => {
  return (
    <ScrollView>
      <CoachCard
        coachName={"Eric Flag"}
        coachImage={
          "https://yt3.googleusercontent.com/ytc/AGIKgqP7Ja2Jw_fgEJqFhDL6DOAhRo5Q9ZL5OSdSl6oonw=s900-c-k-c0x00ffffff-no-rj"
        }
        coachDescription={
          "Spécialiste street workout, cela fait maintenant 10ans que je pratique. Je suis la pour vous aider à atteindre vos objectifs !"
        }
      />
      <CoachCard
        coachName={"Manga Workout"}
        coachImage={
          "https://www.influenceur.promo/wp-content/uploads/2022/03/Mangaworkout.jpg"
        }
        coachDescription={
          "Spécialiste manga workout, cela fait maintenant 10ans que je pratique. Je suis la pour vous aider à atteindre vos objectifs !"
        }
      />
      <CoachCard
        coachName={"Tibo inShape"}
        coachImage={
          "https://yt3.googleusercontent.com/ytc/AGIKgqMiw5NBbOwrYg9iVhJEcaKeb7ZYp9aoCfnXijBJXQ=s900-c-k-c0x00ffffff-no-rj"
        }
        coachDescription={
          "Spécialiste cardio workout, cela fait maintenant 10ans que je pratique. Je suis la pour vous aider à atteindre vos objectifs !"
        }
      />
    </ScrollView>
  );
};

export default CoachList;
