import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

const Project = () => {
    const router = useRouter();
    const { typeId } = router.query;
  
    return <p>Post: { typeId }</p>
}

export default Project;
