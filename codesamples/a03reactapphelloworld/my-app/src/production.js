import React from 'react';

class ProductionLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batches: [],
            isLoading: true,
        };
        console.log('Constructor: Initializing state');
    }

    // Lifecycle method: componentDidMount
    componentDidMount() {
        console.log('componentDidMount: Component mounted, fetching data...');
        
        // Simulate fetching production data
        setTimeout(() => {
            this.setState({
                batches: [
                    { id: 1, status: 'Completed' },
                    { id: 2, status: 'In Progress' },
                    { id: 3, status: 'Pending' },
                ],
                isLoading: false,
            });
        }, 2000);
    }

    // Lifecycle method: componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component updated');
        
        if (prevState.batches.length !== this.state.batches.length) {
            console.log('New batch added. Current batches:', this.state.batches);
        }
    }

    // Lifecycle method: componentWillUnmount
    componentWillUnmount() {
        console.log('componentWillUnmount: Cleaning up before component unmounts');
        // Any necessary cleanup can be done here
    }

    // Method to add a new batch
    addBatch = () => {
        this.setState(prevState => ({
            batches: [...prevState.batches, { id: prevState.batches.length + 1, status: 'Pending' }],
        }));
    };

    render() {
        console.log('Render: Rendering component');
        
        const { batches, isLoading } = this.state;

        return (
            <div>
                <h1>Production Line Status</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {batches.map(batch => (
                            <li key={batch.id}>
                                Batch {batch.id}: {batch.status}
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={this.addBatch}>Add Batch</button>
            </div>
        );
    }
}

export default ProductionLine;
