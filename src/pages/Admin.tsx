

import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, User, Settings, Shield, Activity, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react';

const metrics = [
	{ label: 'Users', value: 128, icon: User, color: 'bg-green-100 text-green-700' },
	{ label: 'Active Calls', value: 12, icon: PhoneCall, color: 'bg-blue-100 text-blue-700' },
	{ label: 'Uptime', value: '99.99%', icon: Shield, color: 'bg-purple-100 text-purple-700' },
	{ label: 'Incidents', value: 1, icon: AlertCircle, color: 'bg-yellow-100 text-yellow-700' },
];

const quickActions = [
	{ label: 'Invite User', icon: User },
	{ label: 'Sync Data', icon: BarChart3 },
	{ label: 'Clear Cache', icon: Settings },
	{ label: 'View Logs', icon: Activity },
];

const systemStatus = [
	{ service: 'API', status: 'Operational', color: 'bg-green-600' },
	{ service: 'Database', status: 'Operational', color: 'bg-green-600' },
	{ service: 'Telephony', status: 'Degraded', color: 'bg-yellow-600' },
	{ service: 'Web', status: 'Operational', color: 'bg-green-600' },
];

const users = [
	{ name: 'Alice Smith', role: 'Admin', status: 'Active' },
	{ name: 'Bob Lee', role: 'Support', status: 'Active' },
	{ name: 'Carol Jones', role: 'User', status: 'Inactive' },
];

const recentActivity = [
	{ action: 'User login', status: 'success', time: '2 min ago' },
	{ action: 'Settings updated', status: 'success', time: '10 min ago' },
	{ action: 'API key generated', status: 'success', time: '30 min ago' },
	{ action: 'Support ticket created', status: 'warning', time: '1 hr ago' },
];


const Admin = () => (
	<div>
		<PageHeader
			title="System Administration"
			subtitle="Manage platform settings, users, and system health."
			breadcrumb="Home / Admin"
		>
			<div className="flex flex-col md:flex-row gap-4 mt-4">
				<Button className="btn-hero bg-primary text-white font-bold">Invite User</Button>
				<Button className="btn-hero bg-secondary text-primary font-bold">View Logs</Button>
			</div>
		</PageHeader>

		{/* Dashboard Metrics */}
		<section className="section-padding">
			<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{metrics.map((m, idx) => (
					<Card key={m.label} className={`card-professional card-hover ${m.color}`}>
						<CardContent className="p-6 flex flex-col items-center">
							<m.icon size={32} className="mb-2"/>
							<div className="text-xl md:text-2xl font-bold mb-1">{m.value}</div>
							<div className="text-sm md:text-base text-muted-foreground">{m.label}</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>

		{/* Quick Actions */}
			<section className="section-padding bg-background">
				<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{quickActions.map((a, idx) => (
						<Card key={a.label} className="card-professional card-hover">
							<CardContent className="p-6 flex flex-col items-center">
								<a.icon size={28} className="mb-2 text-primary"/>
								<Button className="btn-hero w-full text-base md:text-lg">{a.label}</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

		{/* System Status */}
		<section className="section-padding">
			<div className="container-custom max-w-3xl mx-auto">
				<Card className="card-professional">
					<CardContent className="p-6">
						<h4 className="text-xl md:text-2xl font-bold mb-4">System Status</h4>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{systemStatus.map(s => (
								<div key={s.service} className="flex items-center gap-2">
									<Badge className={`${s.color} text-white`}>{s.status}</Badge>
									<span className="font-semibold">{s.service}</span>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>

		{/* User Management */}
		<section className="section-padding bg-background">
			<div className="container-custom max-w-3xl mx-auto">
				<Card className="card-professional">
					<CardContent className="p-6">
						<h4 className="text-xl md:text-2xl font-bold mb-4">User Management</h4>
						<table className="w-full text-left border-collapse text-sm md:text-base">
							<thead>
								<tr className="bg-muted">
									<th className="p-2">Name</th>
									<th className="p-2">Role</th>
									<th className="p-2">Status</th>
									<th className="p-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{users.map(u => (
									<tr key={u.name} className="border-b">
										<td className="p-2 font-medium">{u.name}</td>
										<td className="p-2">{u.role}</td>
										<td className="p-2">
											<Badge className={u.status === 'Active' ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'}>{u.status}</Badge>
										</td>
										<td className="p-2">
											<Button size="sm" variant="outline">Edit</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardContent>
				</Card>
			</div>
		</section>

		{/* Recent Activity */}
		<section className="section-padding">
			<div className="container-custom max-w-3xl mx-auto">
				<Card className="card-professional">
					<CardContent className="p-6">
						<h4 className="text-xl md:text-2xl font-bold mb-4">Recent Activity</h4>
						<div className="space-y-4">
							{recentActivity.map((r, idx) => (
								<div key={idx} className="flex items-center justify-between bg-muted rounded-lg p-4">
									<div className="font-semibold">{r.action}</div>
									<div className="flex items-center gap-2">
										<Badge className={r.status === 'success' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'}>
											{r.status === 'success' ? <CheckCircle size={14}/> : <AlertCircle size={14}/>}
											{r.status.charAt(0).toUpperCase() + r.status.slice(1)}
										</Badge>
										<span className="text-xs text-muted-foreground">{r.time}</span>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>

		{/* Support Card */}
		<section className="section-padding bg-background">
			<div className="container-custom max-w-3xl mx-auto">
				<Card className="card-professional">
					<CardContent className="p-6 text-center">
						<h4 className="text-xl md:text-2xl font-bold mb-4">Support & Resources</h4>
						<Button className="btn-hero bg-primary text-white font-bold">View Documentation</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	</div>
);

export default Admin;
