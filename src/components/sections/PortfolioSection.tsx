type PortfolioProps = {
  isHome?: boolean;
};

export default function PortfolioSection({ isHome = false }: PortfolioProps) {
  return (
    <div className={isHome ? "section-outer container-margins" : "section-outer section-outer--page container-margins"}>
      <div className="page-box">
        <h2 className="section-title">Projects</h2>
        {/* Add preview or full portfolio content here based on isHome */}
      </div>
    </div>
  );
}