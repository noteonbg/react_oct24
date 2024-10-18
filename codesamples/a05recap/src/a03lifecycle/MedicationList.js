import React, { Component } from 'react';

class MedicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: [],
      loading: true,
      error: null,
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    this.fetchMedications();
  }

  // Fetch medications from an API
  fetchMedications = async () => {
    try {
      const response = await fetch('https://api.example.com/medications');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ medications: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  // Lifecycle method: componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    // Example: If the props change, fetch the medications again
    if (this.props.refresh !== prevProps.refresh) {
      this.fetchMedications();
    }
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Cleanup tasks (e.g., aborting requests if needed)
    console.log('Cleaning up...');
  }

  render() {
    const { medications, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Medication List</h1>
        <ul>
          {medications.map((medication) => (
            <li key={medication.id}>{medication.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MedicationList;
