
import OurTeam from '../components/dashboard/dashboard-team';
import dataTeam from '../data/data-team';
function DataTeam(props) {

    return (
        <div>
            <OurTeam data={dataTeam}/>
        </div>
    );
}

export default DataTeam;