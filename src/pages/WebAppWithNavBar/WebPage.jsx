import React, { useState, Component } from 'react';
import NavBar from './NavBar';
import PageContent from './PageContent';
import './nav.css'

let Tab = function (name, displayValue, description, image, Gurudev) {
  return {
    name: name,
    displayValue: displayValue,
    description: description,
    image: image,
    Gurudev : Gurudev
  }
}



export default class WebPage extends Component {

  constructor(props){
    super(props);
    this.state = {tabs: [Tab("Siddha Jagadish das babaji", 'none', {
              content: ["Jagdish Das Babaji lived at Kaliyadaha, not far from the temple of Shri Radha-Madanmohan Ju. He was born in a respected Brahmin family from Barddhaman in Bengal, and grew up to become a famous doctor. But he left all that behind to live in Vrindavan and dedicate his life to Radha and Krishna as a renounced monk.",
              "His Gurudev was Siddha Bhagavan Das Babaji of Ambika Kalna. He also got the blessings of many great souls in Vrindavan. One of those great souls was Sri Premanand Goswami of Shringar Vat, a descendant of Shri Nityananda Prabhu.",
              "One day Baba was feeling a heavy lack of inspiration in his bhajan. That day when he visited Shringar Vat, Premanand Goswami noticed Baba’s sadness. He told him to roll in the dust of Vrindavan, which he did immediately. At that moment the joy of Radha and Krishna’s love returned to his heart. After Premanand Goswami passed away, Baba would roll in the dust of Vrindavan in front of Goswami ji’s samadhi (tomb) if he felt disturbed at heart."
              ,"Once Baba’s brother came from Bengal to visit him. Upon hearing the news that his brother’s wife had died, Baba said, 'Oh, that’s wonderful! Now the bondage of family life is broken for you! You can come to Vrindavan and do bhajan.'"
            ,"After his brother left, Baba realized his mistake. “I must have hurt my brother very badly,” Baba thought. 'I should have comforted him instead.'"
            ,"Baba had no idea where his brother was staying in Vrindavan, and he did not have his address in Bengal either. So Baba made the journey to Hathras train station three days in a row, hoping to meet his brother there. But unfortunately his brother never came."
            ,"Baba then wrote a letter to a friend in Barddhaman, asking him to find his brother and ask forgiveness on his behalf."
            ,"At last Baba received a reply from his brother that he was not hurt, but that he would not be visiting anymore, because he felt he had distracted Baba from his bhajan. He did not wish to disturb him further."
            ,"Every year on the disappearance day of his Gurudev, Baba used to make a mini festival by offering just a few malpowas (sweet pancakes) and distributing pieces of them as prasad."
            ,"Then one year, a devotee gave Baba forty rupees to hold a small feast on the occasion. Baba personally went to the market an bought 20 rupees worth of gur (jaggery) for making malpowas."
            ,"When Baba returned home, he left the bags of gur in his hut and went to wash his feet by the well. But he forgot to latch the door. When he came back, he found that a gang of monkeys had torn open the bags and were having a grand time feasting on the gur. Baba laughed began to recite the prem dhwani (prayers before a feast)."
            ,"That evening the devotee who had sponsored the “feast” came to see Baba. Baba told him, 'So many Vaishnavs were served today by your mercy!' But there was no sign that a feast had occurred."
            ,"When that devotee asked for prasad, Baba said, 'I bought twenty rupees worth of gur and the sacred monkeys of Vrindavan blessed me with their presence. They had a grand festival in my hut and left. Their remnants are still there on the floor, you may take some prasad from there. And here is the rest of your money; please use it to serve the Vaishnavs once more."
            ,"If anyone ever criticized another person or talked about their faults, Baba used to stop them and tell this story.",
            "“Once a devotee said to Shri Bhagavan Das Babaji Mahashay, ‘So-and-so comes here and he talks like some big devotee. But he has not even given up eating fish!’",
            "“Babaji Mahashay asked him, ‘Have you ever eaten fish?’",
            "“‘Yes,’ he replied. ‘But I don’t eat it anymore.’",
            "“’Just like that, he will also quit eating fish one day,’ replied Babaji Mahashay.",
            "“Shri Bhagavan Das Babaji Mahashay did not approve of this kind of talk. He taught that devotee, ‘It’s not ok to find fault with somebody for doing something you used to do yourself. The soul progresses little by little. Do not look upon anyone’s faults.’”",
          "Baba was always careful to avoid offending anyone. He never used to attend any kirtans or spiritual discources, because he worried he might find fault with the kirtaniyas or the speakers.",
          "Many sadhus prefer to remain absorbed in their own private worship and not to speak with anyone, but Jagdish Das Babaji was not like that.  He felt that if someone came to him for advice, it was because Mahaprabhu had sent him, and it was his duty to answer their questions and offer advice. Baba also never hosted any discourses at his place, because he was concerned that if any visitors came during the program, they might not get a chance to meet him and ask their questions.",
          "Whenever a group of devotees came to speak with Baba, Baba would usually ask the questions and answer them himself. He preferred to offer his answers first, and let others express their thoughts afterwards. Otherwise, Baba might have to contradict someone’s opinion, and he preferred not to do so, fearing someone might feel hurt.",
          "Once someone asked Baba, “How can I attain prem? Please instruct me.”",
          "“Would you be able to live here in Vrindavan?” asked Baba.",
          "“No Baba, I wouldn’t be able to do it,” replied the devotee.",
          "“Then take two rupees and buy Srila Narottam Das Thakur Mahashay’s Prarthana and Prem Bhakti Chandrika.  Read them all the time and worship according to their teachings. Then you will attain prem.”",
          "Baba used to say, “Shri Gauranga, who came to this world to distribute prem and the Holy Name, mercifully gave us this teaching:",
          "trinadapi sunichena taroriva sahishnuna.  amanina manadena kirtaniyah sada harih",
          "“As long as you are unable to embody the heart of this verse, you will not attain prem. And however much you are able to follow it, that much closer you will get to prem. The day you perfect your following of this instruction, that day you will attain prem, and you receive the supreme blessing of Sri Krishna’s darshan.”",
          "On June 30th, 1915 AD (ashadh shukla shashti of Bangabda 1322) Sri Jagadish Baba left this world at Kaliyadaha, at about 100 years of age."
          ]},
    ["Siddha Jagadish das babaji.jpg"],
    "Siddha Bhagavan Das Babaji (Ambika Kalna)"),

    Tab("Govardhan das babaji", 'none', {
      content: ["He was an exalted Vaisnava and a close associate and disciple of Sri Radharaman Charan Dev. My gurudev, Sri Sri 108 Hridayananda Das Babaji Maharaj received bhek from him."]
    },
    ["Govardhan das babaji.jpg"],
    "Sri Radharaman Charan Dev"), 
    
    Tab("Sri Gauranga das babaji", 'none', {
      content: ["Gauranga Das Babaji was born in 1887 on Magh Shukla Trayodashi in Changari Pota in 24 Paraganas district in West Bengal. Born in an aristocratic brahmin family, his childhood name was Dhirendranath Chakravarti. He was highly educated and uncommonly intelligent. While still in college he received the merciful glance of Sripad Ramadas Babaji Maharaj who was performing sankirtan in the streets in Kolkata. It became difficult for him to continue his education thereafter. Instead of attending school, he would sit at the feet of Babaji Maharaj and listen to his Hari katha and heart-melting kirtan.",
      "Thus, only a few days after passing his university exams and obtaining his MA, he left his home and joined Babaji Maharaj who told him to reside in Braja. Gauranga Das Babaji went to Vrindavan and did bhajan under the guidance of Siddha Pandit Ramakrishna Das Babaji, Siddha Advaita Das Babaji and other great mahatmas. He fashioned clothing from old jute sacks and wandered around Braja Mandal calling out the name of Sri Radhika, “O Pyari Ji! O Pyari Ji!” Noticing his wonderful devotional characteristics, his kaka guru Sripad Sital Das Babaji asked him to stay in his ashram at Raman Reti and do bhajan there."]
    },["Sri Gauranga das babaji.jpg", "Sri Gauranga das babaji 2.jpg"],
    "Sripad Ramadas Babaji Maharaj"), 
    
    Tab("Siddha manohar das babaji", 'none', {
      content: ["Sri Sri 108 Siddha Manohar Das Babaji Maharaj of Govinda Kunda. His life was a remarkable celebration of intense vairagya coupled with japa and lila-smaran.", 
      "The famous Siddha Mahatma Sri Sri 108 Kishorikishorananda Das Babaji (Tin Kudi Baba) took shelter of him and was taught the process of bhajan by him. Both of them were great jewels in the Vaisnava Samaj of Brindavan illuminating the path of pure raganugiya bhajan by demonstrating it themselves in their thoughts, words, and deeds.", 
      "I have put together a brief history of the life of Siddha Manohar Baba for the pleasure of the Vaisnavas while praying for his kripa so I can meet with success in my bhajan. Siddha Manohara Das Babaji was born in Madhavapura in the district of Nadia in 1847 and was named Mahendra. His father was Sri Bholanatha Adhikari and mother was Pyarisundari. His mother died when he was six years old and his father died when he was thirteen.",
      "When he was six years old he had a dream that a saint came and took him to a forest, then set the forest on fire on all sides.  This dream awakened in him a distaste for material life. After the death of his father he took diksha from Sri Nandakishor Goswami, a decendent of Advaitacharya and went to Nabadwip to study Sanskrit grammar, alankara, and nyaya. He took bhek from Sri Svarupa Das Babaji of Nabadwip and was given the name Manohar Das. While in Nabadwip he had the good fortune of enjoying the association of Siddha Caitanya Das Babaji of Nabadwip and Siddha Bhagavan Das Babaji of Kalna."]
    }, ["Siddha manohar das babaji.jpg"],
    "Sri Nandakishor Goswami"),
    
    Tab("Ananda Gopala Goswami", 'grid', {
              content: ["Srila Ananda Gopala Gosvami Prabhupada, the 12th generation direct descendant from Sri Advaita Acharya, appeared in Vrindavana Dhama on Padmanabha Ekadasi October, 1897. At the age of fourteen he and his parents moved to Navadvipa Dhama, where he passed his life.",
              "The bhajana life of Sri Ananda Gopala Goswami was very exemplary and fruitful. Every day he got up at 3 am, took a bath and sat down for bhajana. Tears would stream from his eyes while he was immersed in meditation. By performing purashcarana he attained mantra darshana. Purashcarana is a nonstop marathon recital of a large number of diksha mantras in order to attain darshana of the mantra Devata.",
              "Sri Ananda Gopala Goswami would not eat until he finished his daily quota of japa. No family member or disciple could disturb him until 8 a.m. At 10 a.m. he would take some of Sri Madangopalji’s prasadi fruits and sweets. Afterwards, he would meet with his family and disciples.",
              "Ananda Gopala Goswami was totally averse to the principle of a professional Guru. In fact, he never asked his disciples for donations even though many were wealthy. He and his wife were completely renounced and full of devotion.",
              "Even though they had no bank account, no land and no house, they continually served their family deities, Sri Sri Radha Madana Gopala. Whenever donations did come, he would immediately spend them to serve Sri Krishna and the Vaisnavas. When he heard someone singing Radha’s name, he would embrace him and say, “This person has purchased me!”",
              "In Vrindavana 1954, he gave wonderful lectures for one fortnight on Vilapa Kusumanjali and Radharasa Sudhanidhi in Radha Damodara Mandira. Everyone was astonished to hear his sweet and essential explanations of each verse. Where the rasa-stream of other lectures stopped, Sri Ananda Gopala Goswami began. In each verse, he led the listeners through the course of the Radha-Krishna’s eight-fold daily pastimes.",
              "Whatever problems or questions that the manjari bhava sadhakas had in their sadhana, he would clearly answer by drawing live pictures of manjari bhava with every discourse. By his mercy, sadhakas forevermore can easily depict the sequence of beautifully sweet and intimate sevas to perform in Priya-Priyatama’s Vraja nikunja-lilas. In the 1970’s, Sri Ananta das Panditji gave lectures on Vilapa Kusumanjali based on a transcript of these lectures.",
              "Regarding the disputed authorship of Radha Sudhanidhi (Hit Harivamsa or Prabhodhananda Sarasvati), Ananda Gopala Goswami told the audience in Radha Damodara Mandira: “Some person may come to a mango grove and inquire: ‘How many fruits are in these trees? Who constructed this grove? How are the fruits sold and who is the owner?’ Yet another person will just come, purchase the mangoes, offer them, sit under a tree and say: ‘Aha, how sweet are these mangoes!’",
              "“So similarly, Radharasa Sudhanidhi is a wonderful book, born by the grace of Sri Radharani, whoever may have composed it. What matters is the relish of its contents. We need to become qualified to extract the rasa from this book. Radha dasya is the goal of our lives. And Madan Gopala becomes subdued by us if we can meditate on the foot soles of Radharani. Radha dasya is our only shelter.”",
              "What follows are some the direct words of Sri Ananda Gopala Goswami revealing his nistha in manjari bhava as Radharani’s loyal maisdservant:",
              "“Prabhupada Ananda Gopala Goswami, cherishing Srimati Radharani’s lotus-feet within his heart, used to proudly say, ‘If necessary for Radha’s seva, I will go to hell. I don’t want anything else but Radha. I will not accept Krishna alone. If Krishna comes to me alone, I will send Him back.",
              "‘If such an attitude would ruin me, then let it be. I will accept Krishna neglectfully, and only then if He comes along with Radha! Because I am Radha’s maidservant, I will wander around being proud of Radha. If, however, the Divine Pair comes then I will offer myself to Them. I always sing Radha’s name with tears in my eyes and thrill bumps on my body.’” (Suchaka Kirtana (v.16-18) of Radha-Govinda das)",
              "When Ananda Gopala Goswami passed away, his son Srila Nikunja Gopala Goswami said, “There was no question of any inheritance talks. My father was only saying: ‘Ha Radhe! Ha Radhe!’’ Remembering that moment, his disciple Giriraja Baba said, “He would just cry out two names of Radha: ‘Ha Svamini! Ha Karunamayi!’” (adapted from hagiography of Sri Advaita dasji)",
              "Sri Advaita Prabhu Parivara ki jai! Thakuraji Sri Sri Madana Gopala ki jai!",
              "Sri Ananda Gopala Goswami ki jai! Radhe Radhe! Radhe Radhe! Radhe Radhe! Radhe!"]
            }, ["Ananda Gopala Goswami.jpg","Ananda Gopal Goswami , Pratibha sundari Goswamini.jpg"],
    ""),
    Tab("Nikunja Gopala Goswami", 'none', {
              content: ["According to family tradition, Bābā took dīkṣā from his mother. He did so early in the morning in the cold month of Māgha when he was 9 years old. Initially Bābā wanted to take dīkṣā from a siddha yogī, but when his mother expressed her disappointment at this he rolled at his mother’s feet and told her: “Mother, your heart’s desires have been fulfilled – the Guru is antaryāmī (God the inner monitor of each living being). Therefore, O mā, please give me the shelter of your dīkṣā.”",
                        "Rādhā-Caraṇa Deslā: “Bābā behaved very well. He never took prasāda without first circumambulating his parents.”",
                        "In his youth Bābā attended the Government Sanskrit College in downtown Navadvīpa, but he showed little interest in intellectual gymnastics. Much rather he could be found behind his room practising yoga āsanas. ",
                        "Gopāl Candra Ghoṣh – “When Nikuñja Prabhu was a little boy, whenever he was with his father in Vṛndāvana, he was educated by Gopī dās Bābājī, a highly educated (Matric pass) and renounced saint who lived there. Gopī dās was very heavy and corpulent and lived near the Gopeśvar Mandir. He was the manager of Aśvini Bābu Kunja. He was a great follower of Ānanda Gopāl Gosvāmī, though it is not clear if he was his disciple. He taught Bābā Sanskrit grammar, English, Hindi, Bengali and maths, holding his hand while teaching him how to write. If Bābā made mistakes in Sanskrit conjuncts or in maths he would chastise him, but he also offered his affection and obeisances unto him.”",
                        "Nirañjan Prasād Dās: “In his very early life when our Bābā was practising Yoga Vāśiṣṭha, the book of yoga mārga, once his father said to him: 'Why are you not practising bhakti grantha?' Bābā then and there replied 'Oh my father, please excuse me, I don’t chew the remnants of others.” He was determined to find the truth on his own.",
                        "Nirañjan Prasād Dās: “Three persons have taken an āsana at the Tārā-pīṭha cemetary – Vāma Kṣepā, Tārā Kṣepā and Bābā. Vāma Kṣepā and Tārā Kṣepa are two siddha tāntriks, Guru and disciple. Taking the corpse of a 16-year old caṇḍāla (untouchable) girl on the shoulders, Bābā was immersed up to his neck in the Ganges in the pitch dark of a new moon night when an unembodied voice told him: “My child, you may have achieved perfection in your practise, but your father is waiting for you - he needs you, so go and fulfil his desires. There are jewels in the safe at your home, go and practise these jewel-like spiritual practises. Then your father’s desires will be fulfilled.” Without delay Bābā hurried home. Outside of human vision Bābā completed his duties in his kuṭīr in the complete darkness of that new moon night. After this he began to study the devotional scriptures. One night he had a wonderful dream – he saw Śrīman Mahāprabhu, Śrī Nityānanda Prabhu and Śrī Advaita Prabhu established in the Mandir and himself in the front of the courtyard of the Mandir sitting on the vyāsāsana, lecturing on the Bhāgavata. While he was lecturing his dream suddenly broke. The next morning he told his father about his dream, and his father said: “Boy, this is a true dream. Today you have to lecture at Rāsa Bihārī Mahānta’s Mandir. Your middle brother has done this until now, but now he is very ill, so prepare yourself.” Bābā had, however, just commenced his scriptural studies a few days earlier. He panicked and as he wanted to express his inability to his father, his father had already understood his predicament and placed the dust of his lotus feet upon his head, saying: “My child, do not fear – whatever you will say during this lecture will be elixir for the ears and heart, as the Bhāgavata says – hṛt karṇa rasāyaṇī.” As father blessed him and assured him like this, Bābā felt a superhuman power coming over him. Relying on his father’s foot-dust he mounted the vyāsāsana in that great assembly. It was great to see how he firmly sat down on that elevated seat. There was a huge audience there of all the foremost saints of the time. Everyone present saw only a divine light, created by penance. All, whether young or old, stared at him thirstily as if spellbound by a mantra. His matted locks, his pleasant creamy complexion, his broad chest and forehead, his whole figure grave by meditation, he illuminated the whole assembly hall with his divine radiance. As soon as Bābā’s lecture commenced, the thousands of throats of the audience fell dead silent. It was as if Śukadeva (who was also half-naked and wore matted locks) sat in front of Mahārāja Parīkṣit and the assembled sages on the bank of the Ganges, listening to the topics of Śrīmad Bhāgavata from his divine mouth, like a nectar-Ganges descending upon them. What could compare to their divine bliss! Everyone was speechless. At the end of the lecture everyone sat fixed on their seat, bereft of external consciousness, like bumblebees inebriated by drinking divine honey. What could anyone say to anyone else? No one was able to get up or speak – the lecture was still reverberating in their ear-shells. Mothers had forgotten their children, sādhakas had forgotten their mālā japa. Everyone was perplexed, like a snake that lost the jewels on its hoods (মণণহারা ফণী) – nothing could compare to Bābā’s lectures! Devotees led by Pancānan Ghosh, a senior wealthy resident of Navadvīpa Dhāma, went to see Bābā’s father afterwards and told him: “Prabhupāda, have you invested all your inner power into your youngest son?” Bābā’s father could understand it was a special day – unless the devotees proclaim so, the holy Dhāma could not have become blessed in such a way. It is not an overstatement to say that even now the holy Gaura-Dhāma of Navadvīpa has never been blessed with such sweet nectar topics of the Holy Bhāgavat. When Śrī Śrī Ānanda Gopāl Gosvāmī heard such glorifications of his son he lost himself in divine bliss and could not help kissing his qualified son on the forehead in blessing.",
                        "When Bābā was of adolescent age he was an independent sādhaka – with firm determination he continuously progressed, like a meteor. He would not respond to anyone’s call, as he had no time for that. He was free from external conditioning and apparently did not strictly follow the spiritual family tradition either. He was a bit different – a great yogī steeped in meditation. His two elder brothers did follow the family tradition and assisted their father in devotional programmes. They were somewhat dismissive of their younger brother’s spiritual practises. One day they took the opportunity to submit to their father: “Father, we are very busy with all the devotional programs going on in our home – wouldn’t it be good if you ordered Śrīmān Niku in assisting us a bit?” Śrī Ānanda Gopāl Prabhu agreed and Bābā was compelled to accept this. Bābā had not yet paid sufficient attention to the topic of the Bhāgavata, yet he had to comply with the order of his father. His father assured him, saying: “My son, you need not worry - by my blessing all that is revealed in your meditationsteeped consciousness will be compatible with the verdict of the bhakti-scriptures.” Blissfully taking the foot-dust of his father on his head, Bābā began to recite the Bhāgavata for a week, day in day out, and the assembled devotees praised his skills with hundreds and thousands of mouths. His father and brothers enthusiastically blessed, praised and rewarded him. All the assembled devotees accepted Bābā as a unique and independent mahāpuruṣa, whose knowledge was self-revealed.",
                        "Gopāl Candra Ghosh: “Advaita Dās Bābāji was the first disciple of Ānanda Gopāl Gosvāmī. He was a great renunciant, scholar and bhajanānandī who lived in a kuṭīr on the bank of Brahma Kund. Advaita Dāsji and Nikuñja Prabhu were very fond of each other, so Advaita Dāsji requested Bābā to perform his last rites, which he did in 1958, when he passed away. Bābā also organised a big virahotsava (memorial festival) for Advaita Dāsjī.”",
                        "When Bābā’s mother passed away a shadow was cast over the family home – her starlight had vanished, leaving everyone perplexed with a broken heart. Who could console Gopāl (Bābā)? His whole world had turned dark; it made him show his real nature and cast off his external appearance. He used to wear a fancy dhoti with kurta and a golden pen in the pocket. Now he cast off this worldly appearance, having no more taste for fine cloth and ornaments, put on course short cloth and grew his famous matted locks (jaṭās). Many parties came to him for marriage, but he always declined. No one was any more wondering whether Bābā would leave home, only when. He stayed, however, to engage in the service of his broken-hearted father. He could not fully dedicate his mind anymore, though",
                        "After some time Bābā became interested in music. Within a short while he mastered the art of music and could play his favourite tunes. He often mentioned the songs of Vṛndāvana’s Haridās Swāmi as his favourites. His musical skills too, like his scriptural knowledge, were self-taught and internally revealed. His father proudly called him a śrutidhara, a person who learns through a single hearing. Will a forest bird, however, like to stay in a cage? The bird of Bābā’s mind was flying from one kuñja of nature to the other, absorbed in relishing the sweet juice of the mango buds there. Forgetting the world, Bābā took his Vīṇā to his chest and sang to the lotus feet of his beloved Lord in his favourite tunes, while shedding tears. If ever his father called him: ‘Niku! Niku!’ how could he reply? His mind had forgotten his body and had become absorbed in dressing premādhikā Rādhikā in the kuñjas of Śrī Vṛndāvana.",
                        "This, however, did not last long. Within a year Bābā’s father also passed away. Now Bābā’s last shackles had fallen off, the forest bird was set free to fly to the other side of the blue sky, to dive into the soothing nectar waterfall of Śyāma-rasa. ",
                        "Advaita Dās: “I asked Bābā about the heritage of his father. He told me: “Oh there was no question about these things. On his death-bed my father just cried out “Hā Rādhe! Hā Rādhe!” Nothing was said about any heritage. I just left it all to my elder brothers and went out to become a sādhu.”",
                        "Nirañjan Prasād Dās: “Bābā set off to a cave in Haridvāra, to the astonishment of the world he left behind. Finally our young ascetic placed down his meditation mat to sit in a lotus position in a bluish meadow in the dense woods of Mount Manasa. Thus the days passed in penance. After some time the wild animals of the forest began to take shelter of Bābā. Mother Manasā (a snake) was blissfully playing hide-and-seek within his matted locks, which hung down to his feet. One day a mountain girl appeared with burning incense in her hand and offered oblations with this along with fruits, flowers and sandalwood pulp. After making this devotional offering she disappeared without anyone ever finding out her identity. This dense forest was far away from the bustle of society, only 2 to 3 sannyāsīs were there, absorbed in their worship and meditations. Later Bābā left that place and proceeded to Mount Chandi and from there to Mount Triśulī. In this way some years passed in great penance"]
            }, ["Nikunja gopal Goswami.jpg", "Nikunja gopal Goswami 2.jpg", "Nikunja gopal Goswami 3.jpg", "Nikunja gopal Goswami 4.jpg", "Nikunja gopal Goswami 5.jpg"],
    "Pratibha sundari Goswamini")]};
  }
  render(){
    let toggleTab = (tabName) => {
      let tabList  = this.state.tabs;
    tabList.forEach((tab) => {
      if (tab.name === tabName) {
        tab.displayValue = "grid";
      }
      else {
        tab.displayValue = "none";
      }
    })
    //setTabs(tabs);

    this.setState({
      tabs: tabList
    },() => { })
    }

    return (
      <div id="page">
        <NavBar items={this.state.tabs.map(t => t.name)} displayValues={this.state.tabs.map(t => t.displayValue)} toggleTab={toggleTab}></NavBar>
        {
          this.state.tabs.map(tab => {
            return <PageContent {...tab}></PageContent>
          })
        }
      </div>

    );
}

}