export default function IndexPage() {
  return (
    <div>
      <div>
        <h4 className="text-4xl text-left text-accent-1 w-full p-8">
          Record your thoughts
        </h4>
        <form className="p-10 text-2xl text-center w-full max-w-sm">
          <textarea className="w-full" accesskey="w" placeholder="What is on your mind?"></textarea>
          <input className="w-full" type="text" accesskey="t" placeholder="tags" />
          <button type="submit" className="w-full py-10 text-left" accesskey="s"><u>S</u>ave</button>
        </form>
      </div>
    </div>
  )
}
