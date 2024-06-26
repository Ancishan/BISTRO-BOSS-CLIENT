import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaUser, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    return (
        <div>
            <h2 className="">
                <span>Hi, WelCome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow">

                <div className="stat bg-slate-500">
                    <div className="stat-title text-center text-xl text-blue">Revenue</div>
                    <div className="stat-value flex"><FaDollarSign></FaDollarSign>{stats?.revenue}</div>
                   
                </div>

                <div className="stat">
                    <div className="stat-title"> Users</div>
                    <div className="stat-value flex gap-2 items-center"><FaUsers></FaUsers>{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;