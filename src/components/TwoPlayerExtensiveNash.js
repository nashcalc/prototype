import Tree from 'react-d3-tree';
import "./twoPlayerExtensiveNash.css"

export default function TwoPlayerExtensiveNash() {

  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };



return(
    <div style={{height:"100%"}}>
      <Tree data={orgChart} style={{ width: '50em', height: '100em' }}/>
    </div>
  );


}
