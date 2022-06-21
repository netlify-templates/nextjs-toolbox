import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
It is sad to have to say good-bye to friends especially when you have known them for over 75 years! That's a long time! Well.... probably even more than that if I counted up! Ha! We will miss you Glenda. I can still remember going to her house. Ek' as my Dad called her mother, would always have something baked! Wow! usually tea-cakes. Glenda and her sister Avis would carry us to the ballgames, movies, and of course the Drive-in for a burger and fries and listen to the 50s music over the speaker.  Avis had a car! That tells you how long ago we have been friends! I know Glenda taught school for years and was especially interested in history and ancestry. We visited her just a few days ago and her memory was spot-on! She knew family names and connections and could tell you exactly who married who and their kids names! I was amazed. This kind of 'recollection' as my Grandma would say is a remarkable gift. Folks knew these things back when and I can remember sitting with Grandma when Cousin Hattie would come over- that was Glenda's Grandmother, Ms. Hattie Childers. She would walk over from her house to visit with Cousin 'Lizzie', my Grandma and I got to listen to their talk. Her apron was startched and ironed til it looked porcelain. Both women were educated and their conversation very proper. They could remember who was who and their kids names! and when visits were weeks apart, maybe even months before they got together again, their conversation could pick right up where they were last. I never heard complaint or ridicule, not a word of gossip! They loved each other.
I learned sitting with these wonderful 'ole girls'. I listened then! You know that listening is an 'art'? Makes me wonder if for the past 3 years of 'quiet' if we might have learned to Listen again? I know that 'virtues' were taught to me by Grandma and I still remember that she required that I memorize verses - both of scripture and poems. She didn't miss an opportunity to apply a lesson in our talks.  She would speak to me about her growing up years and when and where she taught school. She went to Texas on the Reed's wagon-train. Cousin Lytle who also could converse, and they did! I have wondered about that trip, can't remember details but I know it was in Enis, Tx and a one-room school! I also know she rode side-saddle that is til she fell and somehow never rode again. I really can hardly imagine her on a horse, but that was how she got there back when! The verses she taught me still are there! I am blessed to have that in my memory. I have quoted them to my children, didn't make them memorize but they do remember 'virtues' and that is sweet to know. I have thought of all the 'Ole girls' in my growing-up years and thankful that there is left for me a legacy that cannot be surpassed. Each one that comes to mind today makes me recall certain 'virtues'! My Mama Gray and her stedfast and abounding energy could and would attempt any task! I'll have to tell you about the surgery on the baby pig sometime!!
There are so many 'virtues' to remember and actually guess that might make me sound OLD! Well! Just Don't tell! Happy Mother's Day girls! Life is still a blast! Even from the Past! Much love to you all and may our Great God increase your Kind!! And strengthen your Virtues! and pass them on! That is also a gift!
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
