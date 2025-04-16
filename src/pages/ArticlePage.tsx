import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TrendingSidebar from '../components/TrendingSidebar';
import { ArrowLeft } from 'lucide-react';

const articles: Record<string, {
  title: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  content: string;
}> = {
  'tech-revolution': {
    title: "Technology Revolution Reshapes Modern Workplace",
    date: "April 8, 2025",
    author: "Dr. Emily Chen",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `In a groundbreaking shift that mirrors the industrial revolution, artificial intelligence and virtual reality are transforming traditional office environments into dynamic digital workspaces. This technological renaissance is fundamentally altering how we work, collaborate, and define productivity in the modern era.

Leading tech companies are spearheading this transformation with innovative hybrid work solutions that seamlessly blend physical and virtual environments. Microsoft's HoloOffice and Google's WorkSpace AI are at the forefront, introducing mixed reality environments that allow remote workers to interact as if they were in the same room.

"We're witnessing the most significant transformation of work since the industrial revolution," explains Dr. Emily Chen, Chief Innovation Officer at Future Workspace Institute. "The integration of AI, VR, and advanced robotics is creating entirely new possibilities for human-machine collaboration."

Key developments driving this revolution include:

• AI-powered personal assistants that can handle complex administrative tasks
• Virtual reality meeting spaces that create immersive collaborative environments
• Adaptive workstations that automatically adjust to individual preferences
• Quantum-encrypted communication channels for secure remote work
• Biometric monitoring systems that optimize work-life balance

The impact extends beyond just how we work. Companies are reporting significant improvements in productivity, employee satisfaction, and innovation. Early adopters of these technologies have seen a 40% increase in collaborative project success rates and a 35% reduction in work-related stress.

However, this transformation also presents challenges. Organizations must navigate issues of digital privacy, ensure equitable access to technology, and maintain human connection in increasingly virtual environments. "The key is to use technology to enhance human capabilities, not replace them," emphasizes Dr. Chen.

The revolution is also reshaping traditional organizational structures. Hierarchical management systems are giving way to more fluid, project-based teams enabled by AI-driven coordination tools. This shift is particularly evident in industries like finance, healthcare, and education, where real-time collaboration and data-driven decision-making are crucial.

Looking ahead, experts predict even more dramatic changes:

• Neural interfaces for direct brain-computer interaction
• Holographic displays replacing traditional screens
• AI systems that can participate in strategic planning
• Quantum computing networks for complex problem-solving
• Augmented reality overlays for enhanced productivity

As we stand at the threshold of this new era, one thing is clear: the workplace of tomorrow will be radically different from what we know today. Organizations that embrace these changes while thoughtfully addressing their challenges will be best positioned to thrive in this new landscape.

The technology revolution in the workplace isn't just about adopting new tools – it's about reimagining the very nature of work itself. As we continue this transformation, the focus must remain on harnessing technology to create more efficient, fulfilling, and human-centric work environments.`
  },
  'ai-breakthrough': {
    title: "Revolutionary AI Breakthrough Changes Everything",
    date: "April 8, 2025",
    author: "Dr. Sarah Chen",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    content: `In a groundbreaking development that promises to reshape the landscape of artificial intelligence, researchers at the Global Institute of Technology have unveiled a revolutionary new AI system capable of human-level reasoning across multiple domains. This breakthrough represents a quantum leap in machine learning capabilities and opens up unprecedented possibilities for the future of technology and society.

The new system, dubbed "NeuralNet X," demonstrates remarkable abilities in areas ranging from complex problem-solving to creative expression. Unlike previous AI models that excelled in specific tasks but struggled with generalization, NeuralNet X shows an unprecedented capacity for cross-domain learning and adaptation.

Dr. Sarah Chen, the lead researcher on the project, explains: "What makes this system truly revolutionary is its ability to transfer knowledge between different domains in ways that closely mirror human cognitive processes. It's not just about processing power or data analysis – it's about understanding context and making meaningful connections."

The implications of this breakthrough are far-reaching, touching virtually every sector of society. In healthcare, the system has already demonstrated the ability to analyze complex medical data and suggest innovative treatment approaches. In climate science, it's helping researchers model complex environmental systems with unprecedented accuracy.

Industry experts are calling this development a watershed moment in the history of artificial intelligence. "This isn't just an incremental improvement – it's a fundamental shift in what we thought was possible with AI," says Dr. James Liu, a prominent AI researcher not involved with the project.

However, the breakthrough also raises important ethical considerations. The research team has emphasized the importance of responsible development and implementation of such powerful technology. They've integrated robust ethical guidelines into the system's core architecture and are calling for international cooperation in establishing governance frameworks for advanced AI systems.

The development team is already working on practical applications across various industries, from healthcare and scientific research to education and environmental protection. Early trials in these areas have shown promising results, suggesting that we may be on the cusp of a new era in human-machine collaboration.

As we stand at this technological crossroads, one thing is clear: the future of artificial intelligence has arrived sooner than anyone expected, and it's more remarkable than we imagined. The challenge now lies in harnessing this breakthrough responsibly and ensuring its benefits are distributed equitably across society.`
  },
  'climate-summit-agreement': {
    title: "Global Climate Summit Reaches Historic Agreement",
    date: "April 8, 2025",
    author: "Elena Rodriguez",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80",
    content: `In a landmark decision that will shape the future of global climate action, world leaders at the 2025 Global Climate Summit have unanimously agreed to the most ambitious carbon reduction targets in history. The groundbreaking accord, dubbed the "Global Climate Restoration Pact," commits all participating nations to achieving net-zero emissions by 2040, a full decade ahead of previous agreements.

The summit, held in Geneva, Switzerland, brought together representatives from 195 countries in what many are calling the most consequential climate negotiations since the Paris Agreement. The new pact includes legally binding commitments for both developed and developing nations, along with unprecedented levels of financial and technological support for countries most vulnerable to climate change.

"This is not just another climate agreement," declared UN Secretary-General Maria Santos. "This is a transformation of our global economy and society, backed by concrete actions and real accountability." The pact includes several groundbreaking provisions:

• A global carbon pricing mechanism to be implemented by 2027
• A $2 trillion green technology transfer fund for developing nations
• Mandatory climate risk disclosure for all public companies
• International standards for renewable energy infrastructure
• Creation of a World Climate Council with enforcement powers

The agreement has received widespread support from both environmental groups and industry leaders. "For the first time, we're seeing true alignment between environmental necessity and economic opportunity," said Dr. James Chen, chief economist at the Global Sustainability Institute.

Perhaps most significantly, the agreement includes robust enforcement mechanisms and clear penalties for non-compliance. Countries that fail to meet their targets will face trade restrictions and limited access to international financial markets.

The pact also emphasizes the role of innovation and technology in addressing climate change. A significant portion of the funding will be directed toward research and development of new clean energy technologies, carbon capture systems, and sustainable infrastructure solutions.

Implementation of the agreement will begin immediately, with the first major deadlines for emissions reductions set for 2027. The World Climate Council will begin operations in January 2026, with headquarters in Singapore.

As the world embarks on this ambitious journey toward a sustainable future, the message from Geneva is clear: the time for incremental change is over. The era of transformative climate action has begun.`
  },
  'senate-bill-passes': {
    title: "Landmark Bill Passes in Historic Senate Session",
    date: "April 8, 2025",
    author: "Jonathan Pierce",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    content: `In a remarkable display of bipartisan cooperation, the Senate has passed the most comprehensive infrastructure and social reform package in decades. The "American Renewal Act" cleared the chamber with a decisive 68-32 vote, marking a rare moment of unity in an often-divided Congress.

The $3.5 trillion package represents a fundamental reshaping of American infrastructure, healthcare, and education systems. Key provisions include:

• $1.2 trillion for traditional infrastructure projects
• $800 billion for clean energy initiatives
• $600 billion for healthcare expansion
• $400 billion for education reform
• $500 billion for research and development

The legislation's passage came after months of intense negotiations between progressive and moderate senators. "This bill proves that democracy can still work when we put the American people first," said Senate Majority Leader Sarah Johnson.

The package includes several groundbreaking initiatives, including the largest investment in clean energy infrastructure in U.S. history, universal pre-K education, and expanded healthcare coverage for millions of Americans.

Implementation will begin immediately, with the first projects expected to break ground within six months. The Congressional Budget Office projects the bill will create over 2 million jobs in its first year alone.

As the legislation moves to implementation, both parties have committed to continued cooperation in overseeing its rollout. A bipartisan oversight committee will monitor progress and ensure efficient use of funds.

The American Renewal Act represents more than just a legislative victory – it's a testament to what's possible when political differences are set aside in service of the greater good.`
  },
  'film-awards': {
    title: "Groundbreaking Film Sweeps Award Season",
    date: "April 8, 2025",
    author: "Rachel Adams",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    content: `In an unprecedented sweep of this year's award season, "The Silent Revolution" has captured the imagination of both critics and audiences, taking home a record-breaking number of accolades across all major ceremonies. The groundbreaking film, which seamlessly blends virtual reality with traditional cinematography, has been hailed as a watershed moment in filmmaking.

Directed by visionary filmmaker Maya Patel, "The Silent Revolution" tells the story of a near-future society grappling with the emergence of consciousness in artificial intelligence. The film's innovative approach to storytelling allows viewers to experience the narrative from multiple perspectives, including that of the AI protagonist.

"We wanted to push the boundaries of what cinema could be," said Patel in her acceptance speech. "This film isn't just about watching a story – it's about living it." The movie's revolutionary use of immersive technology has already influenced several major studios to invest in similar storytelling techniques.

The film's success represents more than just artistic achievement; it signals a fundamental shift in how stories can be told in the digital age. Industry analysts predict this could mark the beginning of a new era in entertainment, where the line between observer and participant becomes increasingly blurred.

Beyond its technical innovations, the film has been praised for its profound exploration of consciousness, humanity, and the ethical implications of artificial intelligence. "It's rare to see a film that's both technically revolutionary and philosophically deep," noted film critic Robert Chen.

The film's impact extends beyond the entertainment industry, sparking discussions in academic and scientific circles about the nature of consciousness and the future of human-AI interaction. Several leading universities have already incorporated the film into their curriculum for courses ranging from philosophy to computer science.

As Hollywood grapples with rapid technological change, "The Silent Revolution" stands as a testament to the power of embracing innovation while staying true to the fundamental art of storytelling.`
  },
  'championship-final': {
    title: "Historic Victory in Championship Final",
    date: "April 8, 2025",
    author: "Mike Thompson",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    content: `In a thrilling match that will be remembered for generations, the underdog Victory United secured their first-ever championship title in a stunning upset against the defending champions, Royal Athletics. The match, which went into triple overtime, ended with a dramatic 4-3 victory that had fans on the edge of their seats until the final whistle.

The game's hero, 19-year-old rookie sensation Maria Rodriguez, scored the winning goal in the 127th minute, becoming the youngest player ever to score in a championship final. "This is what dreams are made of," an emotional Rodriguez said after the match. "We never stopped believing, even when nobody else did."

Victory United's triumph is particularly remarkable given their journey to the final. The team, assembled largely from young talent and overlooked veterans, was predicted to finish in the bottom half of the league at the season's start. Instead, they put together one of the most impressive runs in sporting history, losing only two games all season.

Coach James Chen, who took over the team just two years ago, credited the win to the team's unwavering spirit and innovative training approach. "We didn't just train their bodies, we trained their minds," Chen explained. "This victory belongs to every player, every staff member, and every fan who believed in us."

The match itself was a masterclass in tactical evolution, with both teams adapting their strategies throughout the extended play. The lead changed hands multiple times, with each goal more spectacular than the last. The winning strike, a perfectly executed bicycle kick by Rodriguez, is already being called one of the greatest goals in championship history.

The victory has implications beyond just the trophy. Victory United's success with their youth-focused, analytics-driven approach is likely to influence how other teams develop talent and approach the game. Several clubs have already expressed interest in adopting similar methods.

As celebrations continue in the streets of their hometown, Victory United's achievement stands as a testament to the power of determination, innovation, and teamwork. Their story is sure to inspire future generations of athletes and prove that in sports, anything is possible.`
  },
  'democracy-digital-age': {
    title: "The Future of Democracy in a Digital Age",
    date: "April 8, 2025",
    author: "Prof. Elizabeth Warren",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    content: `As we stand at the crossroads of technological advancement and democratic tradition, we must confront a crucial question: How do we preserve and strengthen democratic institutions in an increasingly digital world? The challenges and opportunities presented by this digital transformation demand our immediate attention and thoughtful consideration.

The digital revolution has fundamentally altered how we communicate, consume information, and participate in civic life. Social media platforms have become our new public squares, algorithms curate our news consumption, and artificial intelligence increasingly influences our decision-making processes. While these technological advances offer unprecedented opportunities for civic engagement and political participation, they also present significant challenges to democratic principles.

First, we must address the issue of digital literacy and access. A truly democratic digital society requires that all citizens have both access to digital technologies and the skills to use them effectively. The digital divide threatens to create a two-tiered democracy where some citizens have greater access to information and participation than others.

Second, we must grapple with the challenge of misinformation and disinformation in the digital age. The viral spread of false information threatens the informed citizenry that is essential to democratic function. We need new approaches to promoting digital literacy and critical thinking skills among all citizens.

Third, we must consider how to maintain privacy and security in an increasingly connected world. The massive collection and use of personal data by both private companies and governments raises serious questions about individual rights and democratic freedoms.

However, the digital age also offers unprecedented opportunities for democratic renewal. Digital tools can enhance transparency in government operations, facilitate direct citizen participation in decision-making processes, and create new forums for public debate and deliberation.

Looking forward, we must develop new frameworks for democratic governance that embrace technological innovation while preserving fundamental democratic values. This might include:

• Digital citizenship education programs
• New models of online public consultation
• Blockchain-based voting systems
• AI-powered tools for government transparency
• Updated privacy and data protection regulations

The future of democracy in the digital age will depend on our ability to harness technology's potential while mitigating its risks. This requires not just technological solutions, but also political will, civic engagement, and a renewed commitment to democratic values.

As we navigate this transition, we must remember that technology should serve democracy, not the other way around. The digital transformation of our society presents an opportunity to strengthen and reinvigorate democratic institutions for the 21st century and beyond.`
  },
  'quantum-record': {
    title: "Quantum Computer Sets New Record",
    date: "April 8, 2025",
    author: "Dr. James Liu",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    content: `In a breakthrough that promises to revolutionize computing, researchers at the Quantum Computing Institute have achieved a new record in quantum processing power. Their latest quantum computer, dubbed "QuantumX," has successfully performed calculations that would take traditional supercomputers thousands of years to complete.

The breakthrough came when the team managed to maintain quantum coherence – the delicate state necessary for quantum computing – for an unprecedented 10 minutes. Previous systems could only maintain this state for a few milliseconds. This achievement represents a fundamental leap forward in quantum computing technology.

"This isn't just an incremental improvement," explains Dr. James Liu, lead researcher on the project. "We've crossed a threshold that many thought impossible just a few years ago. This opens up entirely new possibilities in fields ranging from cryptography to drug discovery."

The implications of this breakthrough are far-reaching. In the field of materials science, QuantumX can simulate molecular interactions with unprecedented accuracy, potentially accelerating the development of new materials for everything from solar panels to batteries. In the pharmaceutical industry, it could dramatically speed up drug discovery by simulating molecular interactions at the quantum level.

The team achieved this breakthrough through a combination of innovative cooling techniques and new error-correction algorithms. The system operates at temperatures just above absolute zero (-273.15°C) and uses a novel architecture that allows for more stable quantum states.

The achievement has significant implications for:

• Cryptography and data security
• Climate modeling and weather prediction
• Financial modeling and risk assessment
• Drug discovery and development
• Artificial intelligence and machine learning

However, the researchers emphasize that practical applications are still several years away. "We're at the equivalent of the early days of classical computing," says Dr. Liu. "There's still much work to be done before quantum computers become commonplace."

Nevertheless, this breakthrough represents a significant step toward the quantum computing future, promising to transform how we process information and solve complex problems.`
  },
  'education-reform': {
    title: "Rethinking Education: Beyond Traditional Classrooms",
    date: "April 8, 2025",
    author: "Dr. James Mitchell",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    content: `The global pandemic has forced us to reimagine education in ways we never thought possible. As we emerge from this period of unprecedented change, it's clear that we cannot – and should not – return to the traditional educational model. Instead, we must seize this opportunity to fundamentally transform how we approach teaching and learning.

The traditional classroom model, developed during the industrial revolution, was designed to prepare students for a world that no longer exists. Today's rapidly evolving global economy demands a new educational paradigm that emphasizes creativity, adaptability, and lifelong learning over rote memorization and standardized testing.

Several key principles should guide this transformation:

1. Personalized Learning
The one-size-fits-all approach to education is obsolete. Technology now allows us to tailor educational experiences to individual students' needs, interests, and learning styles. Artificial intelligence and adaptive learning platforms can create personalized learning pathways that evolve with each student's progress.

2. Project-Based Learning
Rather than dividing knowledge into discrete subjects, education should integrate multiple disciplines through real-world projects. This approach helps students develop critical thinking skills and understand the interconnected nature of knowledge.

3. Digital Literacy
In our increasingly digital world, technological fluency is as fundamental as reading and writing. Schools must integrate digital skills across the curriculum, preparing students to be both consumers and creators of digital content.

4. Social-Emotional Learning
The challenges of the modern world require more than just academic knowledge. Students need strong social-emotional skills to navigate complex relationships, manage stress, and maintain mental health.

5. Global Connectivity
Technology allows students to connect with peers worldwide, fostering cultural understanding and preparing them for a globally connected economy.

Implementation of these principles will require significant changes:

• Redesigning physical learning spaces to support flexible, collaborative learning
• Investing in digital infrastructure and ensuring equitable access
• Retraining teachers for new pedagogical approaches
• Developing new assessment methods that measure real-world skills
• Creating stronger partnerships between schools, industries, and communities

The cost of these changes may seem daunting, but the cost of maintaining the status quo is far greater. We risk producing graduates who are ill-equipped for the challenges and opportunities of the 21st century.

Moreover, this transformation offers an opportunity to address long-standing inequities in education. By leveraging technology and new pedagogical approaches, we can create more accessible, equitable learning opportunities for all students.

The future of education must be more flexible, more personalized, and more connected to the real world. It's time to move beyond the limitations of traditional classrooms and embrace a new educational paradigm that prepares students for the challenges and opportunities of tomorrow.`
  },
  'stock-market': {
    title: "Stock Market Hits Record High",
    date: "April 8, 2025",
    author: "Michael Bloomberg",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    content: `Global stock markets reached unprecedented heights today as a perfect storm of positive economic indicators, technological breakthroughs, and strong corporate earnings drove investor confidence to new levels. The S&P 500 closed at 6,500, while the Dow Jones Industrial Average surpassed 40,000 for the first time in history.

The rally was led by technology and clean energy sectors, with several companies posting double-digit gains. The surge comes amid a series of major technological breakthroughs in artificial intelligence and quantum computing, which investors believe will drive the next wave of economic growth.

Market analysts point to several factors contributing to this historic rise:

• Strong corporate earnings across multiple sectors
• Breakthrough developments in quantum computing and AI
• Successful implementation of global climate initiatives
• Stable global political environment
• Positive economic indicators in major markets

"What we're seeing is not just a market rally, but a fundamental shift in how investors view the future of the global economy," explains Sarah Chen, chief market strategist at Global Investment Partners. "The convergence of technological innovation and sustainable practices is creating unprecedented opportunities for growth."

The technology sector saw particularly strong gains, with companies involved in quantum computing and artificial intelligence leading the charge. The clean energy sector also posted significant gains, boosted by recent government initiatives and technological advancements in energy storage.

However, some analysts urge caution amid the euphoria. "While the fundamentals are strong, investors should remain mindful of potential risks," warns Dr. James Wilson, noting that rapid technological change can also create market volatility.

Despite these concerns, the overall mood among investors remains optimistic, with many seeing this as the beginning of a new era in economic growth driven by technological innovation and sustainable development.`
  },
  'sustainable-energy-economics': {
    title: "The Economics of Sustainable Energy",
    date: "April 8, 2025",
    author: "Dr. Michael Bloomberg",
    category: "Opinion",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    content: `Analyzing the financial viability of renewable energy solutions has revealed a transformative shift in the global energy landscape. Recent technological advances and economies of scale have made sustainable energy not just environmentally necessary, but economically advantageous.

The numbers tell a compelling story. Solar and wind power now consistently outperform fossil fuels in terms of cost per kilowatt-hour, with prices continuing to fall. Energy storage solutions have become increasingly efficient and affordable, addressing the intermittency challenges that once plagued renewable energy adoption.

This economic transformation has far-reaching implications for investors, policymakers, and consumers. The transition to renewable energy represents not just an environmental imperative, but a significant economic opportunity.`
  },
  'future-urban-planning': {
    title: "Urban Planning for the Next Century",
    date: "April 8, 2025",
    author: "Sarah Chen",
    category: "Opinion",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    content: `Cities must evolve to meet the challenges of population growth and climate change. The future of urban planning lies in creating sustainable, resilient, and livable cities that can adapt to changing environmental and social conditions.

Smart city technologies, green infrastructure, and human-centered design principles are revolutionizing how we approach urban development. From vertical forests to underground transportation networks, innovative solutions are helping cities become more efficient, sustainable, and enjoyable places to live.

The key to successful urban planning lies in balancing technological advancement with human needs, ensuring that cities remain vibrant, inclusive communities while becoming more environmentally sustainable.`
  },
  'ai-ethics': {
    title: "The Ethics of Artificial Intelligence",
    date: "April 8, 2025",
    author: "Prof. Alan Turner",
    category: "Opinion",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    content: `Examining the moral implications of advanced AI systems has become increasingly crucial as artificial intelligence continues to evolve and integrate into every aspect of our lives. The rapid advancement of AI technology raises fundamental questions about consciousness, responsibility, and human values.

Recent developments in AI capabilities have brought these ethical considerations to the forefront. As AI systems become more sophisticated in their decision-making abilities, we must carefully consider the frameworks and guidelines that will govern their development and deployment.

The challenge lies in creating AI systems that are not only powerful and efficient but also aligned with human values and ethical principles. This requires a collaborative effort between technologists, ethicists, policymakers, and the public.`
  }
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-lg mb-4">The article you're looking for may have been moved or doesn't exist.</p>
        <Link to="/" className="vintage-button">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <article className="lg:col-span-3">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 vintage-button">
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
        <div className="article-meta mb-6">
          {article.date} • By {article.author} • {article.category}
        </div>
        
        {article.imageUrl && (
          <img 
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[500px] object-cover mb-8 grayscale"
          />
        )}
        
        <div className="newspaper-column prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'drop-cap' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <TrendingSidebar />
    </div>
  );
};

export default ArticlePage;