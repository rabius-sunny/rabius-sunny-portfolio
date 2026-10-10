'use client'

import React from 'react'
import {
  Code2,
  Monitor,
  Package,
  Server,
  Star,
  Terminal
} from 'lucide-react'
import { TSkillGroup } from '~/constants/skillset'

import {
  AnimationsIcon,
  BootstrapIcon,
  ChartsIcon,
  ContextApiIcon,
  Css3Icon,
  DockerIcon,
  ElectronIcon,
  Es6Icon,
  ExpressjsIcon,
  FigmaIcon,
  FirebaseIcon,
  FormHandlersIcon,
  FramerMotionIcon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JsIcon,
  LaravelIcon,
  MongodbIcon,
  MysqlIcon,
  NextjsIcon,
  NodejsIcon,
  PhpIcon,
  PostgresqlIcon,
  PostmanIcon,
  PrismaIcon,
  ReactHooksIcon,
  ReactIcon,
  ReactRouterIcon,
  ReduxIcon,
  ShopifyIcon,
  TailwindIcon,
  TsIcon,
  VercelIcon,
  VscodeIcon
} from './SkillIcons'

const headerIconMap: Record<string, React.ReactNode> = {
  code: <Code2 className='size-5 text-[#00d8f6]' />,
  monitor: <Monitor className='size-5 text-[#00d8f6]' />,
  server: <Server className='size-5 text-[#00d8f6]' />,
  package: <Package className='size-5 text-[#00d8f6]' />,
  terminal: <Terminal className='size-5 text-[#00d8f6]' />,
  star: <Star className='size-5 text-[#00d8f6]' />
}

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  html5: Html5Icon,
  css3: Css3Icon,
  javascript: JsIcon,
  typescript: TsIcon,
  es6: Es6Icon,
  php: PhpIcon,
  reactjs: ReactIcon,
  nextjs: NextjsIcon,
  tailwindcss: TailwindIcon,
  redux: ReduxIcon,
  'framer-motion': FramerMotionIcon,
  bootstrap: BootstrapIcon,
  nodejs: NodejsIcon,
  expressjs: ExpressjsIcon,
  mongodb: MongodbIcon,
  mysql: MysqlIcon,
  postgresql: PostgresqlIcon,
  prisma: PrismaIcon,
  reactrouter: ReactRouterIcon,
  reacthooks: ReactHooksIcon,
  context: ContextApiIcon,
  charts: ChartsIcon,
  animations: AnimationsIcon,
  formhandlers: FormHandlersIcon,
  git: GitIcon,
  github: GithubIcon,
  docker: DockerIcon,
  vscode: VscodeIcon,
  figma: FigmaIcon,
  postman: PostmanIcon,
  laravel: LaravelIcon,
  electronjs: ElectronIcon,
  shopify: ShopifyIcon,
  firebase: FirebaseIcon,
  vercel: VercelIcon
}

export default function SkillCard({
  skill
}: {
  skill: TSkillGroup
  index: number
}) {
  const HeaderIcon = headerIconMap[skill.headerIcon] || (
    <Code2 className='size-5 text-[#00d8f6]' />
  )

  return (
    <div className='bg-[#04162a] border border-[#0f2c4f] hover:border-[#00d8f6]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,216,246,0.1)] hover:-translate-y-1 flex flex-col group'>
      {/* Card Header: Icon + Title */}
      <div className='flex items-center gap-3.5 mb-2'>
        <div className='size-10 rounded-xl bg-[#00d8f6]/10 border border-[#00d8f6]/30 flex items-center justify-center shrink-0 shadow-sm shadow-[#00d8f6]/10 group-hover:scale-105 transition-transform'>
          {HeaderIcon}
        </div>
        <h3 className='text-lg font-bold text-white tracking-wide group-hover:text-[#00d8f6] transition-colors'>
          {skill.title}
        </h3>
      </div>

      {/* Description */}
      <p className='text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 mb-6 min-h-[38px]'>
        {skill.description}
      </p>

      {/* 3x2 Grid of Icons + Labels */}
      <div className='grid grid-cols-3 gap-y-5 gap-x-2 items-center justify-items-center mt-auto pt-4 border-t border-[#0f2c4f]/60'>
        {skill.items.map((item, itemIdx) => {
          const IconComponent = skillIconMap[item.iconKey]
          return (
            <div
              key={itemIdx}
              className='flex flex-col items-center justify-center gap-1.5 w-full hover:scale-110 transition-transform duration-200 cursor-default'
            >
              <div className='size-8 flex items-center justify-center'>
                {IconComponent ? (
                  <IconComponent className='size-7' />
                ) : (
                  <Code2 className='size-6 text-[#00d8f6]' />
                )}
              </div>
              <span className='text-[11px] sm:text-xs text-slate-300 font-medium text-center truncate max-w-[85px]'>
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
