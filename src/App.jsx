import { useState } from 'react'
import Progress from './components/Progress'
import StepAccount from './components/StepAccount'
import StepProfile from './components/StepProfile'
import StepDone from './components/StepDone'

function App() {
  const [formState, setFormState] = useState({ step: 1, name: '', email: '', role: '', about: '' })

  const updateField = (event) => {
    setFormState((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const nextStep = (event) => {
    event.preventDefault()
    setFormState((current) => ({ ...current, step: current.step + 1 }))
  }

  const previousStep = () => {
    setFormState((current) => ({ ...current, step: current.step - 1 }))
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="mb-8 text-center"><p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">Создание профиля</p><h1 className="mt-3 text-3xl font-bold text-slate-900">Добро пожаловать</h1></div>
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-10">
          <Progress currentStep={formState.step} />
          <form onSubmit={nextStep}>
            {formState.step === 1 && <StepAccount form={formState} onChange={updateField} />}
            {formState.step === 2 && <StepProfile form={formState} onChange={updateField} />}
            {formState.step === 3 && <StepDone form={formState} />}
            {formState.step < 3 && <div className="mt-10 flex justify-end gap-3">
              {formState.step > 1 && <button type="button" onClick={previousStep} className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 hover:bg-slate-50">Назад</button>}
              <button type="submit" className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500">{formState.step === 2 ? 'Создать профиль' : 'Далее'}</button>
            </div>}
            {formState.step === 3 && <button type="button" onClick={() => setFormState({ step: 1, name: '', email: '', role: '', about: '' })} className="mt-8 w-full rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 hover:bg-slate-50">Создать ещё один профиль</button>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default App

