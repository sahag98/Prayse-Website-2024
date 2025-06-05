import Image from "next/image";

function Intro() {
  return (
    <div>
      <section className="w-full flex items-center justify-center py-16 md:py-24 lg:py-32 bg-blue-50">
        <div className="container  px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              MEET OUR TEAM
            </h2>
          </div>

          <div className="grid gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
            {/* First team member */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full transform rotate-12"></div>
                <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                  <Image
                    src="/sahag.png"
                    alt="Sahag Arz"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                  </svg>
                </div>
              </div>
              <div className="text-center lg:text-left max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  Sahag Arzoumanian
                </h3>
                <p className="text-lg text-gray-600 mb-4 font-medium">
                  Founder
                </p>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "Most of my days are spent fixing bugs, but the biggest fix I
                  need? A reminder to pray daily."
                </p>
              </div>
            </div>

            {/* Second team member */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full transform -rotate-12"></div>
                <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                  <Image
                    src="/adriana.png"
                    alt="Adriana Mora"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center lg:text-right max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  Adriana Mora
                </h3>
                <p className="text-lg text-gray-600 mb-4 font-medium">
                  Social Media Manager
                </p>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "You&apos;ll always find me worshipping to &apos;Hard Fought
                  Hallelujah&apos; on repeat ❤️🔥"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
