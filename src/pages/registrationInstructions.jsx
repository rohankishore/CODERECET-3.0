function RegistrationInstructions() {
  const instructions = [
    "Click on Register Now and sign in using Devfolio.",
    "Complete your profile details carefully.",
    "Form a team (or choose to participate solo if allowed).",
    "Submit your registration before the deadline.",
    "Keep checking your email for confirmation and updates.",
  ];

  return (
    <div className="min-h-screen bg-custom-black text-custom-white px-6 py-10 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-thomeo text-3xl sm:text-5xl text-custom-secondary mb-6">
          Registration Instructions
        </h1>

        <p className="font-tactic_sans text-base sm:text-lg mb-6">
          Follow these steps to complete your registration successfully.
        </p>

        <ol className="list-decimal list-inside space-y-4 font-tactic_sans text-base sm:text-lg">
          {instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block rounded-full px-6 py-2 border border-custom-secondary font-tactic_sans"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationInstructions;
