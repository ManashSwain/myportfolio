const Contact = () => {
  return (
    <>
      <div className="text-center my-12">
        <button
          className="rounded-md bg-slate-800 py-1 m-1 px-2 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Contact
        </button>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl my-2">
          Get in Touch
        </h2>
        <p className="my-2text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Just give me a dm with a direct question on LinkedIn and
          I will respond whenever I can.
        </p>
      </div>
    </>
  );
};

export default Contact;
