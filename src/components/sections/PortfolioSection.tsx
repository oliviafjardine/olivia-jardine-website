type PortfolioProps = {
  isHome?: boolean;
};

export default function PortfolioSection({ isHome = false }: PortfolioProps) {
  return (
    <div className={isHome ? "section-outer" : "section-outer section-outer--page"}>
      <div className="page-box">
        <h2 className="section-title">Projects</h2>
        {/* Add preview or full portfolio content here based on isHome */}
      </div>
    </div>
  );
}