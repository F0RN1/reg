function StepAccount({ form, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">Создайте аккаунт</h2>
      <p className="mt-2 text-slate-500">Начните с базовых данных профиля</p>
      <div className="mt-8 space-y-5">
        <label className="block text-sm font-medium text-slate-700">Имя
          <input name="name" value={form.name} onChange={onChange} required placeholder="Например, Forni" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
        </label>
        <label className="block text-sm font-medium text-slate-700">Email
          <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="hello@example.com" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
        </label>
      </div>
    </div>
  )
}

export default StepAccount
