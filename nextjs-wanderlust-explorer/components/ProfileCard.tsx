interface ProfileCardProps {
  favoriteCount: number;
}

const ProfileCard = ({ favoriteCount }: ProfileCardProps) => {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 text-3xl">
        👤
      </div>
      <h1 className="mt-5 text-3xl font-bold text-slate-950">Alex Morgan</h1>
      <p className="mt-1 text-slate-500">Curious traveler & food explorer</p>

      <dl className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-slate-50 p-5">
          <dt className="text-sm text-slate-500">Home base</dt>
          <dd className="mt-1 font-bold">New York, USA</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5">
          <dt className="text-sm text-slate-500">Saved favorites</dt>
          <dd className="mt-1 text-2xl font-bold text-teal-700">
            {favoriteCount}
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default ProfileCard;
