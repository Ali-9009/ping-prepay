import { useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const study = caseStudies.find((item) => item.slug === slug);

    if (!study) {
        return <div className="p-10">Case study not found</div>;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-(--secondary-color) bg-[url('/assets/element-4.png')] bg-cover bg-center bg-no-repeat px-6 py-24 text-white">
                <div className="grid md:grid-cols-[30%_70%] grid-cols-1 items-start gap-9 max-w-390 mx-auto">
                    <div>
                        <h1 className="primary-heading text-white!">{study.shortTitle}</h1>
                    </div>
                    <div className="max-w-4xl">
                        <h1 className="primary-heading text-white! mb-6">{study.title}</h1>
                        <p className="text-lg text-white/80 leading-8 mb-8">{study.excerpt}</p>
                        {study.heroImage && <img src={study.heroImage} alt={study.title} />}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 py-12 max-w-390 mx-auto">
                <div className="grid md:grid-cols-[30%_70%] grid-cols-1 items-start gap-9">

                    {/* Table of Contents (Scroll ke saath move hoga kyunki sticky hata diya hai) */}
                   <div className="self-start mb-8 bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">
    <h3 className="text-lg font-bold mb-4 text-black">Table of Contents</h3>
    <ul className="space-y-3">
        {study.sections
            // Yahan filter lagaya hai taaki sirf wahi item aaye jiska tocTitle hai
            .filter((section) => section.tocTitle) 
            .map((section) => (
                <li key={section.id}>
                    <a href={`#${section.id}`} className="flex items-center gap-3 text-base text-gray-600 hover:text-black transition-colors">
                        <span>-</span>
                        <span className="truncate">{section.tocTitle}</span>
                    </a>
                </li>
            ))}
    </ul>
</div>

                    {/* Main Content */}
                    <div className="max-w-4xl">
                        {study.sections.map((section) => (
                            <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                                {section.title && <h1 className="primary-heading mb-6">{section.title}</h1>}

                                {section.content && (
                                    <p className="text-lg leading-8 mb-8 text-gray-700">{section.content}</p>
                                )}

                                {/* Line-by-line Points Rendering */}
                                {section.points && (
                                    <div className="space-y-6">
                                        {section.points.map((point, index) => (
                                            <div key={index}>
                                                <p className="text-lg leading-8 text-gray-700">
                                                    <span className="font-bold text-black">{point.label}: </span>
                                                    {point.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Image Section */}
                                {section.image && <img src={section.image} alt={section.title} className="rounded-xl mt-8 mb-8" />}

                                {/* Quote and Author Section */}
                                {section.quote && (
                                    <div className="border-l-4 border-teal-500 pl-6 py-2 my-8">
                                        <p className="text-xl italic text-gray-800 mb-4">"{section.quote}"</p>
                                        {study.author && (
                                            <div className="flex items-center gap-4">
                                                <img src={study.author.image} alt={study.author.name} className="w-12 h-12 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-black">{study.author.name}</h4>
                                                    <p className="text-sm text-gray-500">{study.author.role}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Section */}
                {study.gallery?.length > 0 && (
                    <div className="grid grid-cols-2 items-center justify-center gap-12 mt-12">
                        {study.gallery.map((img) => <img key={img} src={img} alt={study.title} />)}
                    </div>
                )}
            </section>
        </>
    );
}