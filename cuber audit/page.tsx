export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
     <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div> 
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        <h1 className="text-6xl md:text-7xl font-black text-cyan-400 mb-6">
          CyberShield SA
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Professional cybersecurity audits, penetration testing,
          and business protection for South African companies.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          
          <a
  href="https://wa.me/0725968603"
  target="_jptecksolutions269"
  className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition inline-block"
>
  Book Consultation
</a>

          <button className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            View Services
          </button>

        </div>

      </section>
<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-center text-cyan-400 mb-16">
      Our Services
    </h2>
<section className="py-24 px-6 bg-black">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-center text-cyan-400 mb-16">
      Pricing Plans
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border border-cyan-400/20 rounded-3xl p-8 bg-zinc-950">
        <h3 className="text-3xl font-bold mb-4">Starter</h3>
        <p className="text-5xl font-black text-cyan-400 mb-6">R1,500</p>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Basic Security Audit</li>
          <li>✔ Wi-Fi Check</li>
          <li>✔ Password Review</li>
        </ul>
      </div>

      <div className="border border-cyan-400 rounded-3xl p-8 bg-cyan-400/10">
        <h3 className="text-3xl font-bold mb-4">Business</h3>
        <p className="text-5xl font-black text-cyan-400 mb-6">R5,000</p>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Full Network Audit</li>
          <li>✔ Website Testing</li>
          <li>✔ PDF Reports</li>
        </ul>
      </div>

      <div className="border border-cyan-400/20 rounded-3xl p-8 bg-zinc-950">
        <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
        <p className="text-5xl font-black text-cyan-400 mb-6">Custom</p>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Penetration Testing</li>
          <li>✔ Compliance Checks</li>
          <li>✔ Monthly Monitoring</li>
        </ul>
      </div>

    </div>
<section className="py-24 px-6 bg-black">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-center text-cyan-400 mb-16">
      Vulnerability Tracking
    </h2>

    <div className="overflow-x-auto rounded-3xl border border-cyan-400/20">

      <table className="w-full text-left bg-zinc-950">

        <thead className="bg-cyan-400 text-black">
          <tr>
            <th className="p-4">Vulnerability</th>
            <th className="p-4">Severity</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-t border-zinc-800">
            <td className="p-4">Open Remote Desktop Port</td>

            <td className="p-4 text-red-500 font-bold">
              Critical
            </td>

            <td className="p-4 text-yellow-400">
              Open
            </td>
          </tr>

          <tr className="border-t border-zinc-800">
            <td className="p-4">Weak Password Policy</td>

            <td className="p-4 text-orange-400 font-bold">
              High
            </td>

            <td className="p-4 text-green-400">
              Fixed
            </td>
          </tr>

          <tr className="border-t border-zinc-800">
            <td className="p-4">Outdated Website Plugins</td>

            <td className="p-4 text-yellow-400 font-bold">
              Medium
            </td>

            <td className="p-4 text-yellow-400">
              Monitoring
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</section>

  </div>

</section>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-black border border-cyan-400/20 rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          Cybersecurity Audits
        </h3>

        <p className="text-gray-300">
          Full business security assessments for websites,
          networks, and company systems.
        </p>
      </div>

      <div className="bg-black border border-cyan-400/20 rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          Penetration Testing
        </h3>

        <p className="text-gray-300">
          Ethical hacking and vulnerability testing to identify risks.
        </p>
      </div>

      <div className="bg-black border border-cyan-400/20 rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          Compliance Checks
        </h3>

        <p className="text-gray-300">
          Ensure your company meets cybersecurity standards and policies.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-24 px-6">

  <div className="max-w-3xl mx-auto">

    <h2 className="text-5xl font-black text-center text-cyan-400 mb-12">
      Contact Us
    </h2>

    <form className="space-y-6">

      <input
        type="text"
        placeholder="Julian"
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-cyan-400/20"
      />

      <input
        type="email"
        placeholder="jptecksolutions269@gmail.com"
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-cyan-400/20"
      />

      <textarea
        placeholder="Message"
        rows={5}
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-cyan-400/20"
      />

      <button className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold">
        Send Message
      </button>

    </form>

  </div>

</section>
<a
  href="https://wa.me/0725868603"
  target="_Julian"
  className="fixed bottom-6 right-6 bg-green-500 text-black px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-110 transition"
>
  WhatsApp
</a>
    </div>
  );
}