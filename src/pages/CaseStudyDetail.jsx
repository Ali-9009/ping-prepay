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
            <section className="relative w-full overflow-hidden bg-(--secondary-color) bg-[url('/assets/element-4.png')] bg-cover bg-center bg-no-repeat px-6 py-24 text-white">
                <div className="grid md:grid-cols-[30%_70%] grid-cols-1 items-start gap-9 max-w-390 mx-auto">
                    <div>
                        <h1 className="primary-heading text-white!">
                            {study.shortTitle}
                        </h1>
                    </div>

                    <div className="max-w-4xl">
                        <h1 className="primary-heading text-white! mb-6">
                            {study.title}
                        </h1>

                        <p className="text-lg text-white/80 leading-8 mb-8">
                            {study.excerpt}
                        </p>

                        {study.heroImage && (
                            <img src={study.heroImage} alt={study.title} />
                        )}
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 max-w-390 mx-auto">
                <div className="grid md:grid-cols-[30%_70%] grid-cols-1 items-start gap-9">
                    <div className="sticky top-10 mb-8 bg-white rounded-[30px] p-10 max-w-md">
                        <h3 className="text-xl font-semibold mb-8">
                            Table of Contents
                        </h3>

                        <ul className="space-y-5">
                            {study.sections.map((section) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className="flex items-center gap-4 text-lg text-gray-600 hover:text-black transition"
                                    >
                                        <span>-</span>
                                        <span>{section.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-w-4xl">
                        {study.sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="max-w-4xl mt-12 scroll-mt-24"
                            >
                                <h1 className="primary-heading mb-6">
                                    {section.title}
                                </h1>

                                <p className="text-lg leading-8 mb-8">
                                    {section.content}
                                </p>

                                {section.image && (
                                    <img src={section.image} alt={section.title} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {study.gallery?.length > 0 && (
                    <div className="grid grid-cols-2 items-center justify-center gap-12 mt-12">
                        {study.gallery.map((img) => (
                            <img key={img} src={img} alt={study.title} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}