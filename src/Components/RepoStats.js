import React from "react";
import Wrapper from "../assets/wrapper/RepoStats";
import LanguageStats from "./Stats/LanguageStats";
import MostStar from "./Stats/MostStar";
import { useAppContext } from "../context/appContext";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  HorizontalBar,
} from "chart.js";
import MostForked from "./Stats/MostForked";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function RepoStats() {
  const { repos } = useAppContext();

  if (!repos) {
    return <div>Loading...</div>;
  }

  const languages = repos ? repos.map((repo) => repo.language) : [];

  const counts = languages.reduce((acc, lang) => {
    if (lang) {
      acc[lang] = (acc[lang] || 0) + 1;
    }
    return acc;
  }, {});

  const data = Object.entries(counts).map(([lang, count]) => ({
    language: lang,
    count: count,
  }));

  data.sort((a, b) => b.count - a.count);

  // Step 5: Get the top 5 languages
  const topLanguages = data.slice(0, 5);

  const chartData = {
    labels: topLanguages.map((language) => language.language),
    datasets: [
      {
        label: "Repo Stats",
        data: topLanguages.map((language) => language.count),
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        hoverBackgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Most star per language

  const languageStar = repos
    ? repos.map((repo) => ({
        language: repo.language,
        star: repo.stargazers_count,
      }))
    : [];
  console.log(languageStar);

  const starCounts = languageStar.reduce((acc, { language, star }) => {
    if (language) {
      acc[language] = (acc[language] || 0) + star;
    }
    return acc;
  }, {});
  console.log(starCounts);
  const StarData = Object.entries(starCounts).map(([language, stars]) => ({
    language,
    stars,
  }));

  // Step 4: Sort the data by the number of stars
  StarData.sort((a, b) => b.stars - a.stars);
  console.log(StarData);
  // Step 5: Get the top 5 languages
  const topStarLanguage = StarData.slice(0, 5);
  const starData = {
    datasets: [
      {
        data: topStarLanguage.map((item) => item.stars),
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        hoverBackgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        borderWidth: 1,
      },
    ],
    labels: topStarLanguage.map((item) => item.language),
  };

  // most fork
  const languageFork = repos
    ? repos.map((repo) => ({
        language: repo.language,
        forks: repo.forks_count,
      }))
    : [];
  console.log(languageFork);

  const forkCounts = languageFork.reduce((acc, { language, forks }) => {
    if (language) {
      acc[language] = (acc[language] || 0) + forks;
    }
    return acc;
  }, {});

  console.log(forkCounts);

  const topForkedLanguage = Object.entries(forkCounts)
    .map(([language, forks]) => ({ language, forks }))
    .sort((a, b) => b.forks - a.forks)
    .slice(0, 5);

  const forkData = {
    datasets: [
      {
        data: topForkedLanguage.map((item) => item.forks),
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        hoverBackgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#8884D8",
        ],
        bgColor: "#FFFFFF",
        borderWidth: 1,
      },
    ],
    labels: topForkedLanguage.map((item) => item.language),
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        
          <LanguageStats chartData={chartData} />
          <MostStar data={starData}></MostStar>
          <MostForked data={forkData}></MostForked>
          
        
      </Wrapper>
    </section>
  );
}
