function StepDone({ form }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">✓</div>
      <h2 className="mt-6 text-2xl font-bold text-slate-900">Всё готово, {form.name || 'новый пользователь'}!</h2>
      <p className="mt-2 text-slate-500">Профиль создан. Добро пожаловать в ваше новое рабочее пространство.</p>
      <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left text-sm text-slate-600">
        <p><span className="font-semibold">Email:</span> {form.email}</p>
        <p className="mt-2"><span className="font-semibold">Роль:</span> {form.role || 'Не указана'}</p>
      </div>
    </div>
  )
}

export default StepDone

