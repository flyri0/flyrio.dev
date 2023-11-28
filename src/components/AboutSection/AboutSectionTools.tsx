import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiVisualstudiocode,
} from 'react-icons/si/index';

import AboutSectionTool from '@components/AboutSection/AboutSectionTool';

export default function AboutSectionTools(): JSX.Element {
  return (
    <>
      <h1 className="mb-5 mt-10 text-center font-spaceGrotesk font-bold text-highlight">
        Minhas Ferramentas
      </h1>

      <div className="grid grid-flow-col grid-rows-1 place-content-center gap-5">
        <AboutSectionTool
          icon={SiJavascript}
          href="https://developer.mozilla.org/docs/Web/JavaScript/"
          inlineText="JavaScript"
        />

        <AboutSectionTool
          icon={SiTypescript}
          href="https://www.typescriptlang.org/"
          inlineText="TypeScript"
        />

        <AboutSectionTool
          icon={SiNodedotjs}
          href="https://nodejs.org/"
          inlineText="Node.JS"
        />

        <AboutSectionTool
          icon={SiTailwindcss}
          href="https://tailwindcss.com/"
          inlineText="TailwindCSS"
        />

        <AboutSectionTool
          icon={SiGit}
          href="https://git-scm.com/"
          inlineText="Git"
        />

        <AboutSectionTool
          icon={SiVisualstudiocode}
          href="https://code.visualstudio.com/"
          inlineText="VSCode"
        />
      </div>
    </>
  );
}
