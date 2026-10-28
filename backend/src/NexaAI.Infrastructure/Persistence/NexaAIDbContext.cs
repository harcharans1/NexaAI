
using Microsoft.EntityFrameworkCore;
using NexaAI.Domain.Entities;

namespace NexaAI.Infrastructure.Persistence;

public sealed class NexaAIDbContext : DbContext
{
    public NexaAIDbContext(DbContextOptions<NexaAIDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.HasKey(user => user.Id);

            entity.Property(user => user.FullName)
                .HasMaxLength(120)
                .IsRequired();

            entity.Property(user => user.Email)
                .HasMaxLength(320)
                .IsRequired();

            entity.HasIndex(user => user.Email)
                .IsUnique();

            entity.Property(user => user.BusinessName)
                .HasMaxLength(160)
                .IsRequired();

            entity.Property(user => user.PasswordHash)
                .IsRequired();

            entity.Property(user => user.Role)
                .HasMaxLength(30)
                .IsRequired();
        });
    }
}
