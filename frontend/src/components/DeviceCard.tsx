import React from 'react';

interface Props {
  label: string;
  status: string;
  icon: React.ReactNode;
}

const DeviceCard: React.FC<Props> = ({ icon, label, status }) => {
  return (
    <div className={`p-4 rounded-lg border flex flex-col items-center text-center gap-2 ${status === 'Active' ? 'border-blue-400' : 'border-slate-600'} text-white`}>
      <div className="text-3xl">{icon}</div>
      <h3 className="font-semibold">{label}</h3>
      <p className="text-sm text-slate-400">{status}</p>
    </div>
  );
};

export default DeviceCard;
