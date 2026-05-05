"use client";

const QurbaniTips = () => {
    const tips = [
        "স্বাস্থ্যবান পশু নির্বাচন করুন",
        "ওজন ও বয়স যাচাই করুন",
        "বিশ্বস্ত বিক্রেতা থেকে কিনুন",
    ];

    return (
        <section className="border-t px-4 py-16 mx-aut">
            <div className="max-w-6xl mx-auto px-4 text-center">

                <h2 className="text-3xl font-bold mb-10">
                    Qurbani Tips
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {tips.map((tip, i) => (
                        <div
                            key={i}
                            className="bg-white text-black p-6 rounded-xl shadow hover:shadow-md"
                        >
                            <p className="font-medium">{tip}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default QurbaniTips;