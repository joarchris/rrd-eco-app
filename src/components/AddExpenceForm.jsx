// react imports
import { useRef } from 'react';

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';

// rrd imports
import { useFetcher } from "react-router-dom"

const AddExpenceForm = ({budgets}) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting' 

    const formRef = useRef()
    const focusRef = useRef()


    return (
        <div className="form-wrapper" >
            <h2 className="h3">Add new {' '} <span className="accent">
            {budgets.length === 1 && `${budgets.map(budget => budget.name)}`}
            </span>{' '}
            Expense
            </h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
            <div className='expence-inputs'>
                <div className="grid-xs">
                    <label htmlFor="newExpence">Expence Name</label>
                    <input type="text" name="newExpence" id="newExpence" placeholder="e.g. Coffee" ref={focusRef} required />
                    </div>
                    <div className="grid-xs">
                    <label htmlFor="newExpenceAmount">Amount</label>
                    <input type="number" step="0.01" name="newExpenceAmount" id="newExpenceAmount" placeholder="e.g. 50,-" required inputMode="decimal" />
                </div>    
            </div>
            <div className="grid-xs" hidden={budgets.length === 1}>
                <label htmlFor="newExpenceBudget">Budget category</label>
                <select name="newExpenceBudget" id="newExpenceBudget" required>
                    {budgets.sort((a, b) => a.createdAt - b.createdAt).map((budget) => {
                        return (
                            <option key={budget.id} value={budget.id}>{budget.name}</option>
                        )
                    })}
                



                    
                
                </select>
            </div>
<input type="hidden" name="_action" value="createExpence" />
<button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {
            isSubmitting ? <span>Submitting ...</span>
          : (
            <><span>Add expence</span>
            <PlusCircleIcon width={20} />
            </>
            )
            }
            
          </button>


            </fetcher.Form>
        </div>

    )
}
export default AddExpenceForm