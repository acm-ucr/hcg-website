const MailingList = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-hcg-gold w-4/5 rounded-2xl p-2">
        <div className="font-hcg-main rounded-2xl border border-white p-10 font-light">
          <div className="mb-10 text-center text-2xl font-bold text-white md:text-5xl">
            Join our Mailing List
          </div>
          <form className="space-y-6">
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <div className="mb-2 text-lg text-white">First Name</div>
                <input className="w-full bg-white p-3 focus:outline-none" />
              </div>
              <div className="hidden flex-1 md:block">
                <div className="mb-2 text-lg text-white">Last Name</div>
                <input className="w-full bg-white p-3 focus:outline-none" />
              </div>
            </div>
            <div>
              <div className="mb-2 text-lg text-white">Email</div>
              <input className="w-full bg-white p-3 focus:outline-none" />
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="cursor-pointer rounded-lg bg-black px-12 py-2 text-lg text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
