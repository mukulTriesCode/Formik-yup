import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginForm from "@/components/Form";
  
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LoginForm />
      <h1 className="asdf"></h1>
    </>
  );
}
