import './Votes.css'

function Votes() {
    return  <section>
                <h1>
                    Vote Here
                </h1>
                <section>
                    <button>Chocolate</button>
                    <button>Vanilla</button>
                    <button>Strawberry</button>
                </section>
                <section>
                    {votes === 0
                    ? <p>No votes yet.</p>
                    :<p>Chocolate:  number/percentage</p>}

                    {votes === 0 
                    ? <p>No votes yet.</p>
                    :<p>Vanilla:  number/percentage</p>}
                    
                    {votes === 0 
                    ? <p>No votes yet.</p>
                    :<p>Strawberry:  number/percentage</p>}
                    
                </section>
    </section>
}

export default Votes;