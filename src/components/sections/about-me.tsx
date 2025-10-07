import Image from 'next/image';

import SagarFullPose from '/public/images/tanish-complete.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate cybersecurity learner and full-stack developer, driven by the challenge of building secure, scalable, and efficient systems. My expertise spans offensive security, red teaming, malware research, reverse engineering, and AI-powered security projects, supported by a strong development background in React.js, Node.js, Python, Go, and scripting languages.
          </Typography>
          <Typography>
            I actively grow my skills through CTFs and real-world practice platforms. 
            On {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.THM}
            >
              TryHackMe
            </Link>{' '}
            , I rank in the Top 3% globally with 120+ rooms completed, 23+ badges, and advanced labs like 2024 Moniker and FlareVM, while also sharpening my penetration testing and red teaming skills on {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.HTB}
            >
              HackTheBox
            </Link>{' '}
            OSCP-style labs as preparation for the OSCP certification exam.
          </Typography>
          <Typography>
            My journey is strengthened by multiple certifications, including Jr Penetration Tester, EC-Council Dark Web & Anonymity, AIG APT Breach Analysis, Cybersecurity Management, and Phishing Campaigns, as well as 50+ PortSwigger Web Security Labs solved. I have also gained valuable industry experience as a Cybersecurity Intern with the Amroha Police Cyber Security Program, where I worked on digital forensics, evidence analysis, and real-world cybercrime investigations.
          </Typography>
          <Typography>
            Despite deep involvement in this field, I still approach every challenge with the same curiosity, persistence, and passion that fueled my first steps in cybersecurity. My long-term goal is to represent India on global cybersecurity platforms like TryHackMe and HackTheBox, while contributing to innovative solutions at the intersection of AI and security.
            {' '}
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Pursuing BTech in Computer Engineering
              </Typography>
              <Typography component="li">Penetration Tester</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Malware Developer</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
