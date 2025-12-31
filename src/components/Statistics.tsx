interface Statistic {
  number: string;
  label: string;
  description?: string;
}

const statistics: Statistic[] = [
  {
    number: '96%',
    label: 'Customer Satisfaction',
    description: 'Rated 5 stars by thousands of travelers',
  },
  {
    number: '150+',
    label: 'Unique Tours',
    description: 'Curated experiences across Egypt',
  },
  {
    number: '28+',
    label: 'Destinations Explored',
    description: 'From Cairo to the Red Sea',
  },
  {
    number: '10+',
    label: 'Years Experience',
    description: 'Trusted local expertise',
  },
];

export default function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              TRUSTED NETWORK
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Egypt Tours is more than a trip — it's a lifetime experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Every journey becomes a story you'll carry forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-600 mb-3">
                  {stat.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                {stat.description && (
                  <p className="text-sm text-gray-600">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

