import { Metadata } from 'next';
import Image from 'next/image';
import {
  DocumentTextIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import { Card } from '@/components/Card';
import { ExternalLink } from '@/components/ExternalLink';
import { DISCORD_LINK, GET_HELP_LINK } from '@/common/constants';
import { RaasProviderGrid } from '@/components/RaasProviderGrid';

const metadataContent = {
  title: 'Avail - Launch your own Avail Orbit Chain!',
  description:
    'Avail Arbitrum Orbit is the ideal way to permissionlessly launch your own custom chain. Build a chain on top of Arbitrum Sepolia, Sepolia, and baseSepolia.',
};

// Generate server-side metadata for this page
export function generateMetadata(): Metadata {
  return {
    title: metadataContent.title,
    description: metadataContent.description,
    openGraph: {
      title: metadataContent.title,
      description: metadataContent.description,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataContent.title,
      description: metadataContent.description,
    },
  };
}

type OptionalOrbitPageParams = {
  searchParams: {
    orbitChain?: string;
  };
};

export default function LaunchPage(params: OptionalOrbitPageParams) {
  return (
    <div className="relative mx-auto flex w-full flex-col gap-[40px]">
      {/* Banner Image */}
      <Card className="relative flex items-center justify-between gap-6 bg-gradient-landing-banner py-3 pl-8 pt-[110px] lg:flex-col lg:items-start lg:justify-center lg:py-[104px]">
        <p className="text-xl md:hidden lg:text-[28px]">Orbit</p>
        {/* <Image
          alt="Bridge"
          src="/orbit_horizontal_logo_white.svg"
          width={124}
          height={31}
          className="hidden h-[31px] w-[124px] lg:block"
        /> */}
        <p className="hidden text-xl md:block lg:text-[28px]">Launch your own Avail Orbit Chain</p>
        <Image
          alt="Bridge"
          src="/illustration-orbit.webp"
          width={100}
          height={100}
          className="h-[80px] w-[80px] mix-blend-screen lg:hidden"
        />
      </Card>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {/* Orbit Docs card */}
        <Card
          className="relative flex flex-col gap-6 p-5 active:bg-blue md:hover:opacity-90"
          cardType="externalLink"
          showExternalLinkArrow
          href="https://docs.arbitrum.io/launch-orbit-chain/orbit-gentle-introduction"
        >
          <div className="z-10 flex w-full flex-col gap-5">
            <div className="p-1">
              <DocumentTextIcon className="h-8 w-8 stroke-1" />
            </div>
            <p className="text-xl lg:text-[28px]">Read the docs</p>
            <p className="mb-6 w-full text-sm opacity-50">
              Everything you need to know about Orbit chains.
            </p>
          </div>
        </Card>

        {/* Playground card */}
        <Card
          className="relative flex flex-col gap-6 p-4 active:bg-blue md:hover:opacity-90"
          cardType="link"
          showExternalLinkArrow={true}
          href="/deployment"
        >
          <div className="z-10 flex w-full flex-col gap-5">
            <div className="p-1">
              <RocketLaunchIcon className="h-8 w-8 stroke-1" />
            </div>
            <p className="text-xl lg:text-[28px]">Launch on testnet</p>
            <p className="mb-6 w-full text-sm opacity-50">
              A step-by-step guide for launching your own Orbit chain in under 10 minutes.
            </p>
          </div>
        </Card>

        {/* Admin UI Card */}
        {/* <Card
          className="relative flex flex-col gap-6 p-4 active:bg-blue md:hover:opacity-90"
          cardType="link"
          showExternalLinkArrow={true}
          href="/admin"
        >
          <div className="z-10 flex w-full flex-col gap-5">
            <div className="p-1">
              <WrenchScrewdriverIcon className="h-8 w-8 stroke-1" />
            </div>
            <p className="text-xl lg:text-[28px]">Manage your chain</p>
            <p className="mb-6 w-full text-sm opacity-50">
              Modify and optimize the parameters of your existing chains.{' '}
            </p>
          </div>
        </Card> */}
      </div>

      {/* Stylus card */}
      {/* <Card
        className="relative flex shrink-0 grow-0 flex-col gap-6 bg-stylus-pink p-4 py-6 hover:bg-stylus-pink/80 lg:p-6"
        cardType="externalLink"
        href="https://arbitrum.io/stylus"
      >
        <div className="z-10 flex h-full w-full flex-col justify-around gap-4">
          <Image
            alt="Stylus"
            src="/stylus_white.svg"
            height={40}
            width={160}
            className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.5)]"
          />

          <div className="flex flex-col flex-nowrap gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="lg:w-3/4">
              <div className="text-base lg:text-2xl">
                Stylus is now on mainnet. <span className="opacity-60">Do More. With Stylus.</span>
              </div>
            </div>

            <ExternalLink className="text-xs underline underline-offset-8">Learn More</ExternalLink>
          </div>
        </div>
      </Card> */}

      {/* RaaS list */}
      {/* <div className="flex flex-col gap-4">
        <Card className="flex flex-col gap-4 bg-default-black text-sm">
          <div className="text-xl lg:text-3xl">Launch to Mainnet</div>
          <hr className="opacity-20" />
          <div className="mb-2 flex w-full flex-col gap-3 text-sm opacity-60">
            Use a third-party Rollup as a Service providers can help take your testnet orbit chain
            to mainnet.
          </div>
          <RaasProviderGrid />
        </Card>
      </div> */}

      {/* Orbit SDK link */}
      {/* <Card
        className="relative flex flex-col gap-6 p-4 active:bg-[#0C6DA3] md:hover:opacity-90"
        cardType="externalLink"
        href="https://github.com/OffchainLabs/arbitrum-orbit-sdk"
        showExternalLinkArrow
      >
        <div className="z-10 flex w-full flex-col gap-3">
          <div className="text-xl lg:text-3xl">Get started on your own</div>
          <hr className="opacity-20" />
          <div className="mb-8 flex w-full flex-col gap-3 text-sm opacity-60">
            <p>Utilize the Orbit SDK to launch your chain to mainnet without any support.</p>
            <p>
              Please be aware that running a chain involves various infrastructure needs. For
              increased chances of success, we highly recommend using a Rollup as a Service
              provider.
            </p>
          </div>

          <div className="w-full text-base">Dive into the SDK</div>
        </div>
      </Card> */}

      {/* Other links */}
      {/* <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> */}
      {/* Discord */}
      {/* <Card
          className="relative flex flex-col gap-6 bg-blue p-4 md:hover:opacity-90"
          cardType="externalLink"
          showExternalLinkArrow
          href={DISCORD_LINK}
        >
          <div className="z-10 flex w-full flex-col gap-3">
            <div className="mb-8 w-full text-sm text-black/75">
              Receive support by joining the{' '}
              <span className="mx-1 rounded-lg bg-black/20 px-1.5 py-1">#orbit-support</span>{' '}
              channel in Discord.
            </div>

            <div className="w-full text-base text-black">Get support</div>
          </div>
        </Card> */}

      {/* Contact us */}
      {/* <Card
          className="relative flex flex-col gap-6 p-4 active:bg-blue md:hover:opacity-90"
          cardType="externalLink"
          href={GET_HELP_LINK}
          showExternalLinkArrow
        >
          <div className="z-10 flex w-full flex-col gap-3">
            <div className="mb-8 w-full text-sm opacity-60">
              Connect with us to learn if an Orbit chain makes sense for you.
            </div>
            <div className="w-full text-base">Get in touch</div>
          </div>
        </Card> */}
      {/* </div> */}
    </div>
  );
}
