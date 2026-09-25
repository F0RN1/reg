function StepProfile({ form, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">Расскажите о себе</h2>
      <p className="mt-2 text-slate-500">Эти данные помогут настроить ваш опыт</p>
      <div className="mt-8 space-y-5">
        <label className="block text-sm font-medium text-slate-700">Роль
          <select name="role" value={form.role} onChange={onChange} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
            <option value="">Выберите роль</option><option>Дизайнер</option><option>Разработчик</option><option>Менеджер</option><option>Предприниматель</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">О себе
          <textarea name="about" value={form.about} onChange={onChange} rows="4" placeholder="Чем вы занимаетесь?" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
        </label>
      </div>
    </div>
  )
}

export default StepProfile

