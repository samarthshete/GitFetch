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

  // will get most popular languages used in a GitHub user's repositories.
  const languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = 1;
    } else {
      total[language]++;
    }
    return total;
  }, {});

  console.log(languages);
  // now Convert the counts object to an array as counts is an object
  const data = Object.entries(languages).map(([lang, count]) => ({
    language: lang,
    count: count,
  }));
  console.log(data);
  // will sort the data array in descending order by count
  data.sort((a, b) => b.count - a.count);

  // now Get the top 5 languages
  const topLanguages = data.slice(0, 5);

  console.log(topLanguages);
  const chartData = {
    labels: topLanguages.map((language) => language.language),
    datasets: [
      {
        label: "Count",
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
  // console.log(languageStar);

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
  // console.log(StarData);
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
let {forks} = repos.reduce(
    (total, item) => {
      const { forks, name } = item;
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { forks: {} }
  );

  console.log(forks);
  forks = Object.values(forks).slice(-5).reverse();

  const forkData = {
    datasets: [
      {
        label: "Most Forked Repositories",
        data: forks.map((item) => item.value),
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
    labels: forks.map((item) => item.label),
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
