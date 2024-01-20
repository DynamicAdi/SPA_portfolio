import React from 'react'
import css from "@/styles/About.module.scss"
import Image from 'next/image'
import profile from "@/public/utils/pic.jpg";
import { primary, titles } from '@/public/utils/fonts';

export default function About() {
  return (
    <div className={`${css.container} ${primary.className}`}>
    <img src={profile.src} alt={"profile"} className={css.profile} />
    <div className={css.content}>
        <h1 className={`${css.title} ${titles.variable}`}>About</h1>
    <div className={css.description}>
        <p className={css.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero non aperiam exercitationem delectus ratione voluptatum voluptate velit eos doloribus, facere fugiat nihil fuga praesentium unde inventore labore. Temporibus illum praesentium veniam deleniti quae debitis dignissimos eveniet maiores. Labore officiis non accusamus molestiae reiciendis autem rerum ab modi mollitia est animi nam consectetur magni, sunt consequuntur, eveniet perspiciatis deleniti deserunt quo nemo. Dolorem, iure nulla consequatur sit nemo cupiditate illum dolorum architecto facere officiis in accusamus minima accusantium at odit facilis eligendi quasi laudantium deserunt cum sed. Delectus laboriosam, ratione, nihil odit harum iusto aut, dolores rem impedit voluptatem ullam veritatis!</p>
    </div>
    </div>
    </div>
  )
}
