function Progress({ currentStep }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-3">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${step <= currentStep ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-400'}`}>{step}</div>
          {step < 3 && <div className={`h-1 w-10 rounded-full sm:w-16 ${step < currentStep ? 'bg-violet-600' : 'bg-slate-100'}`} />}
        </div>
      ))}
    </div>
  )
}

export default Progress

