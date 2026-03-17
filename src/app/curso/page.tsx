import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseHero from "@/components/course/CourseHero";
import CourseModules from "@/components/course/CourseModules";
import CourseGames from "@/components/course/CourseGames";
import CourseFeatures from "@/components/course/CourseFeatures";
import CourseCTA from "@/components/course/CourseCTA";

export const metadata: Metadata = {
  title: "CodeLab BR — Aprenda a programar do zero",
  description:
    "Plataforma completa de ensino de programação para iniciantes. Módulos estruturados, gamificação, jogos interativos e certificado.",
};

export default function CursoPage() {
  return (
    <>
      <Navbar />
      <main>
        <CourseHero />
        <CourseModules />
        <CourseGames />
        <CourseFeatures />
        <CourseCTA />
      </main>
      <Footer />
    </>
  );
}
