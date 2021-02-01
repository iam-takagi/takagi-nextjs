import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>takagi</title>
        <meta property="og:title" content="takagi" />
        <meta property="og:description" content="takagi webpage" />
        <meta property="og:url" content="https://iam-takagi.github.io/" />
        <meta property="og:image" content="/icon.png" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="min-h-screen">
        <div className="container mx-auto h-screen flex justify-center text-center">
          <div className="w-2/3 mx-auto flex-col">
            <div className="flex justify-center items-center">
              <img src="/icon.png" alt="" width="128" height="128" className="w-128 h-128 rounded-full pointer-events-none select-none" />
            </div>
            <div className="desc w-full my-6 space-y-1">
              <p className="text-lg">I am Takagi.</p>
              <p>Contact: Takagi#8622</p>

              <div className="space-x-4 pt-3">
                <p className="inline text-blue-500">
                  <a href="https://twitter.com/iam_takagi">Twitter</a>
                </p>
                <p className="inline text-blue-500">
                  <a href="https://github.com/iam-takagi">GitHub</a>
                </p>
                <p className="inline text-blue-500">
                  <a href="https://youtube.com/channel/UCwPdVUvF4gOlJCwl9LW4hyw">YouTube</a>
                </p>
                <p className="inline text-blue-500">
                  <a href="https://twitch.tv/iam_takagi">Twitch</a>
                </p>
                <p className="inline text-blue-500">
                  <a href="https://annict.jp/@Takagi">Annict</a>
                </p>
                <p className="inline text-blue-500">
                  <a href="https://www.geartics.com/iam_takagi" className="text-blue-500">
                    Geartics
                  </a>
                </p>

              </div>


              <div className="space-x-4 pt-1">

                <p className="pt-3">
                  <h3 className="text-lg font-bold">Desktop</h3>
                  Fractal Design Define R5<br />
                  ROG STRIX Z370-F GAMING<br />
                  Intel Core i7-8700<br />
                  DDR4 8GB<br />
                  Geforce GTX 1080<br />
                  Samusung SSD 860 EVO 500GB<br />
                  2710DCS23-360 300GB<br />
                  ST2000DM006-2DM164 2TB
                </p>

                <p className="pt-3">
                  <h3 className="text-lg font-bold">Laptop</h3>
                  MacBook Pro 2020 13-inch<br />
                  Dell Latitude E4310
                </p>

                <p className="pt-3">
                  <h3 className="text-lg font-bold">Server</h3>
                  null
                </p>

                <p className="pt-3">
                  <h3 className="text-lg font-bold">Phone</h3>
                  Arrows<br />
                  iPhone5s<br />
                  iPhone6s<br />
                  iPhone7s<br />
                  iPhone 11 Pro
                </p>

                <p className="pt-3">
                  <h3 className="text-lg font-bold">Tablet</h3>
                  iPad mini3<br />
                  iPad mini4<br />
                  iPad 8<br />
                </p>

                <div className="flex justify-center items-center pt-3 pb-3">
                <img src="/gear.jpeg" alt="" height="500" width="400" className="rounded-md border-4 border-blue-400 border-opacity-50 pointer-events-none select-none"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
